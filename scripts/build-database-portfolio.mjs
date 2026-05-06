/**
 * Reads ../Database (Mobile Apps, Figma Design, AI technologies) and emits
 * src/data/databasePortfolioData.ts for the portfolio UI.
 */
import fs from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";
import {
  applyLiveImageryFallbacks,
  BUILD_PLACEHOLDER_IMAGE,
  LEGACY_PLACEHOLDER_SUBSTR,
  pickLivePortfolioImage,
  STOCK_IMAGE_MARK,
} from "./liveImagePools.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const databaseRoot = path.resolve(projectRoot, "..", "Database");

const IMAGE_CACHE_PATH = path.join(__dirname, "portfolio-image-cache.json");

function loadImageCache() {
  try {
    return JSON.parse(fs.readFileSync(IMAGE_CACHE_PATH, "utf8"));
  } catch {
    return {};
  }
}

function saveImageCache(cache) {
  try {
    fs.writeFileSync(IMAGE_CACHE_PATH, JSON.stringify(cache, null, 2), "utf8");
  } catch (e) {
    console.warn("[build-database-portfolio] Could not save image cache:", e.message);
  }
}

function absolutizeImageUrl(img, baseUrl) {
  if (!img || typeof img !== "string") return null;
  const t = img.trim().replace(/&amp;/g, "&");
  if (t.startsWith("http://") || t.startsWith("https://")) return t;
  try {
    return new URL(t, baseUrl).href;
  } catch {
    return null;
  }
}

/**
 * Fetches a page and extracts og:image / twitter:image (works for many company sites,
 * Google Play, App Store, Figma share links when meta tags are present).
 */
async function fetchOgImageFromPage(pageUrl) {
  let url;
  try {
    url = new URL(pageUrl);
  } catch {
    return null;
  }
  if (!/^https?:$/i.test(url.protocol)) return null;

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 22000);
  try {
    const res = await fetch(pageUrl, {
      redirect: "follow",
      signal: ctrl.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const patterns = [
      /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
      /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
      /<meta[^>]+name=["']twitter:image(?:[:][^"']*)?["'][^>]+content=["']([^"']+)["']/i,
      /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image[^"']*["']/i,
      /<meta[^>]+itemprop=["']image["'][^>]+content=["']([^"']+)["']/i,
    ];
    for (const re of patterns) {
      const m = html.match(re);
      if (m?.[1]) {
        const abs = absolutizeImageUrl(m[1], pageUrl);
        if (abs) return abs;
      }
    }
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
  return null;
}

function needsRemoteImage(image, link) {
  if (!link || typeof link !== "string") return false;
  if (!image || typeof image !== "string") return true;
  if (image.startsWith("/src")) return true;
  if (image.includes(LEGACY_PLACEHOLDER_SUBSTR)) return true;
  if (image === BUILD_PLACEHOLDER_IMAGE) return true;
  if (image.includes(STOCK_IMAGE_MARK)) return true;
  return false;
}

async function enrichPortfolioImages(projects) {
  if (process.env.SKIP_PORTFOLIO_FETCH_IMAGES === "1") {
    console.log("[build-database-portfolio] SKIP_PORTFOLIO_FETCH_IMAGES=1 — skipping remote image fetch.");
    return projects;
  }

  const cache = loadImageCache();
  let updated = 0;
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));

  for (let i = 0; i < projects.length; i++) {
    const p = projects[i];
    const link = p.link;
    if (!needsRemoteImage(p.image, link)) continue;

    let resolved = cache[link];
    if (!resolved) {
      process.stdout.write(`[build-database-portfolio] Image ${i + 1}/${projects.length}: ${link.slice(0, 72)}…\n`);
      resolved = await fetchOgImageFromPage(link);
      if (resolved) {
        cache[link] = resolved;
        saveImageCache(cache);
      }
      await delay(250);
    }

    if (resolved) {
      p.image = resolved;
      updated++;
    }
  }

  if (updated) console.log(`[build-database-portfolio] Set OG/Twitter images for ${updated} project(s).`);
  return projects;
}

function slugify(name) {
  const s = String(name || "project")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
  return s || "project";
}

function readFileSafe(p) {
  try {
    return fs.readFileSync(p, "utf8");
  } catch {
    return "";
  }
}

function tryParseObjectLiteral(content) {
  const trimmed = content.trim();
  if (!trimmed.startsWith("{")) return null;
  const ctx = vm.createContext(
    new Proxy(
      {},
      {
        get(_, prop) {
          if (prop === "console") return console;
          return String(prop);
        },
        has() {
          return true;
        },
      }
    )
  );
  try {
    return vm.runInNewContext(`(${trimmed})`, ctx, { timeout: 2000 });
  } catch {
    return null;
  }
}

function extractStringField(text, key) {
  const re = new RegExp(`${key}\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`, "s");
  const m = text.match(re);
  return m ? m[1].replace(/\\"/g, '"').replace(/\\n/g, "\n") : "";
}

function extractFirstUrl(text) {
  const m = text.match(/https?:\/\/[^\s"'<>]+/);
  return m ? m[0].replace(/[,;.)]+$/, "") : "";
}

function normalizeImage(rawImage, category, projectId) {
  if (rawImage && typeof rawImage === "string" && rawImage.startsWith("http")) return rawImage;
  return pickLivePortfolioImage(category, projectId || String(category), 0);
}

function normalizeStats(raw) {
  const list = Array.isArray(raw?.stats) ? raw.stats : [];
  return list.map((s) => ({
    label: String(s?.label ?? "Metric"),
    value: String(s?.value ?? "—"),
    icon: typeof s?.icon === "string" ? s.icon : "Star",
    description: String(s?.description ?? ""),
  }));
}

function normalizeResults(raw) {
  if (Array.isArray(raw?.results) && raw.results.length) return raw.results.map(String);
  if (Array.isArray(raw?.outcomes) && raw.outcomes.length) return raw.outcomes.map(String);
  return ["Delivered with measurable impact and strong collaboration."];
}

function foldKey(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

/** Prefer detail vs main when both exist — template main.txt files often duplicate unrelated case studies. */
function pickBestParsedRaw(detailText, mainText, folderName) {
  const d = detailText.trim() ? tryParseObjectLiteral(detailText.trim()) : null;
  const m = mainText.trim() ? tryParseObjectLiteral(mainText.trim()) : null;

  function score(raw) {
    if (!raw || !raw.title) return -Infinity;
    let s = 0;
    const fk = foldKey(folderName);
    const tk = foldKey(raw.title);
    const ck = raw.caseStudyId ? foldKey(raw.caseStudyId) : "";
    if (tk && fk.includes(tk.slice(0, Math.min(12, tk.length)))) s += 30;
    if (tk && tk.includes(fk.slice(0, Math.min(12, fk.length)))) s += 30;
    if (ck && fk.includes(ck)) s += 20;
    if (String(raw.title).toLowerCase().includes("latexite") && !fk.includes("latexite")) s -= 100;
    if (String(raw.client || "").toLowerCase() === "latexite" && !fk.includes("latexite")) s -= 40;
    if (String(raw.title).toLowerCase().includes("sixt") && !fk.includes("sixt")) s -= 40;
    return s;
  }

  const sd = score(d);
  const sm = score(m);
  if (d && m) return sd >= sm ? d : m;
  return d || m || null;
}

function mobileAppProjects() {
  const mobileRoot = path.join(databaseRoot, "Mobile Apps");
  if (!fs.existsSync(mobileRoot)) return [];

  const dirs = fs
    .readdirSync(mobileRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const out = [];
  const usedIds = new Set();

  for (const folderName of dirs) {
    const dir = path.join(mobileRoot, folderName);
    const detail = readFileSafe(path.join(dir, "detail.txt"));
    const main = readFileSafe(path.join(dir, "main.txt"));
    const urlFile =
      readFileSafe(path.join(dir, "URL.txt")) ||
      readFileSafe(path.join(dir, "url.txt")) ||
      readFileSafe(path.join(dir, "URLs.txt"));

    const combined = [detail, main].filter(Boolean).join("\n\n");
    let raw = pickBestParsedRaw(detail, main, folderName);
    if (!raw) raw = tryParseObjectLiteral(combined.trim());

    if (!raw && combined) {
      const title =
        extractStringField(combined, "title") ||
        folderName.replace(/\s*\([^)]*\)\s*g?$/i, "").trim();
      const description =
        extractStringField(combined, "description") || `Mobile app project: ${folderName}.`;
      const category = extractStringField(combined, "category") || "Mobile Development";
      raw = {
        title,
        subtitle: extractStringField(combined, "subtitle") || description.slice(0, 140),
        description,
        longDescription:
          extractStringField(combined, "longDescription") || description,
        category,
        technologies: [],
        duration: extractStringField(combined, "duration") || "—",
        teamSize: extractStringField(combined, "teamSize") || "—",
        client: extractStringField(combined, "client") || folderName,
        challenge: extractStringField(combined, "challenge") || "Requirements and delivery expectations.",
        solution: extractStringField(combined, "solution") || "We delivered end-to-end mobile engineering and QA.",
        link: extractStringField(combined, "link") || "",
      };
    }

    if (!raw) continue;

    let id = slugify(raw.caseStudyId || raw.id || raw.title || folderName);
    while (usedIds.has(id)) id = `${id}-${Math.random().toString(36).slice(2, 6)}`;
    usedIds.add(id);

    const link =
      (typeof raw.link === "string" && raw.link && raw.link !== "#" ? raw.link : "") ||
      extractFirstUrl(urlFile) ||
      undefined;

    const category = String(raw.category || "Mobile Development");
    const description = String(raw.description || raw.title || folderName);
    const subtitle = String(
      raw.subtitle || (description.length > 160 ? `${description.slice(0, 157)}…` : description)
    );

    const project = {
      id: `db-mobile-${id}`,
      title: String(raw.title || folderName).replace(/\s*\([^)]*\)\s*g?$/i, "").trim() || folderName,
      subtitle,
      description,
      longDescription: String(raw.longDescription || raw.description || description),
      image: normalizeImage(raw.image, category, `db-mobile-${id}`),
      category,
      technologies: Array.isArray(raw.technologies) && raw.technologies.length
        ? raw.technologies.map(String)
        : ["Mobile", "Product design", "QA"],
      duration: String(raw.duration || "—"),
      teamSize: String(raw.teamSize || "—"),
      client: String(raw.client || "Client"),
      challenge: String(raw.challenge || "Shipping a high-quality product on time."),
      solution: String(raw.solution || "Iterative delivery with clear milestones and testing."),
      results: normalizeResults(raw),
      stats:
        normalizeStats(raw).length > 0
          ? normalizeStats(raw)
          : [
              {
                label: "Delivery",
                value: "Shipped",
                icon: "CheckCircle",
                description: "Project delivered from agency database records.",
              },
            ],
      testimonial: raw.testimonial &&
        typeof raw.testimonial === "object" &&
        raw.testimonial.quote
        ? {
            quote: String(raw.testimonial.quote),
            author: String(raw.testimonial.author || raw.client || "Client"),
            role: String(raw.testimonial.role || "Stakeholder"),
          }
        : {
            quote:
              "The team delivered solid engineering work and clear communication throughout the engagement.",
            author: String(raw.client || "Client"),
            role: "Project stakeholder",
          },
      link,
      featured: Boolean(raw.featured),
    };

    out.push(project);
  }

  return out;
}

/** Next non-empty trimmed line at or after `from` (exclusive of gaps). */
function nextNonEmptyLine(lines, from) {
  for (let j = from; j < lines.length; j++) {
    if (lines[j]) return lines[j];
  }
  return null;
}

/**
 * Skip agency case-study URLs when the next URL is the direct product/domain link
 * (e.g. artech-digital.com/projects/... followed by https://product.example/).
 */
function shouldSkipAgencyCaseStudyUrl(line, lines, lineIndex) {
  if (!/artech-digital\.com\/projects\//i.test(line)) return false;
  const next = nextNonEmptyLine(lines, lineIndex + 1);
  return (
    Boolean(next) &&
    /^https?:\/\//i.test(next) &&
    !/artech-digital\.com/i.test(next)
  );
}

function parseUrlListFile(filePath, category) {
  const content = readFileSafe(filePath);
  if (!content.trim()) return [];

  const lines = content.split(/\r?\n/).map((l) => l.trim());
  const items = [];
  let pendingTitle = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line) {
      pendingTitle = "";
      continue;
    }
    if (/^https?:\/\//i.test(line)) {
      if (shouldSkipAgencyCaseStudyUrl(line, lines, i)) {
        pendingTitle = "";
        continue;
      }
      let title = pendingTitle;
      if (!title) {
        try {
          const u = new URL(line);
          title = u.hostname.replace(/^www\./, "") || category;
        } catch {
          title = category;
        }
      }
      items.push({ title: title.replace(/\t+$/, "").trim(), url: line });
      pendingTitle = "";
    } else if (!line.startsWith("http")) {
      pendingTitle = line.split("\t")[0].trim();
    }
  }

  const usedIds = new Set();

  function isMobileStoreReference(url, title) {
    const u = String(url || "").toLowerCase();
    const t = String(title || "").toLowerCase();
    return (
      u.includes("play.google.com/store/apps") ||
      u.includes("apps.apple.com") ||
      u.includes("app store") ||
      t.includes("playstore") ||
      t.includes("google play") ||
      t.includes("app store")
    );
  }

  return items.map((item, idx) => {
    const entryCategory =
      category === "Figma Design" && isMobileStoreReference(item.url, item.title)
        ? "Mobile Apps"
        : category;
    // Keep IDs stable with original source category to avoid breaking existing URLs.
    let id = slugify(`${category}-${item.title}-${idx}`);
    while (usedIds.has(id)) id = `${id}-x`;
    usedIds.add(id);
    return {
      id: `db-${slugify(category)}-${id}`,
      title: item.title || `Reference ${idx + 1}`,
      subtitle: `${entryCategory} — live reference and design work`,
      description: `Curated link from the agency database (${entryCategory}).`,
      longDescription: `This entry is sourced from the Database folder and points to external work, case studies, or design artifacts relevant to ${entryCategory}.`,
      image: pickLivePortfolioImage(entryCategory, `db-${slugify(entryCategory)}-${id}`, idx),
      category: entryCategory,
      technologies:
        entryCategory === "Figma Design"
          ? ["Figma", "UI/UX", "Design systems"]
          : entryCategory === "Mobile Apps"
            ? ["Mobile", "iOS", "Android"]
            : ["AI", "Web", "Product"],
      duration: "—",
      teamSize: "—",
      client: "Various",
      challenge: "Represent breadth of delivery across tools and platforms.",
      solution: "We maintain curated references to live products, designs, and AI work.",
      results: [
        "Reference preserved in the agency knowledge base.",
        "Linked resource available for stakeholders and prospects.",
      ],
      stats: [
        {
          label: "Source",
          value: "Database",
          icon: "Database",
          description: "Imported from Database directory.",
        },
      ],
      testimonial: {
        quote: "Our portfolio reflects a wide range of engagements; these references showcase additional context.",
        author: "CodeBetterWorld",
        role: "Agency portfolio",
      },
      link: item.url,
      featured: false,
    };
  });
}

function figmaProjects() {
  const p = path.join(databaseRoot, "Figma Design", "URLs.txt");
  return parseUrlListFile(p, "Figma Design");
}

function aiTechProjects() {
  const p = path.join(databaseRoot, "AI technologies", "URLs (2).txt");
  return parseUrlListFile(p, "AI & Technology");
}

const FORCED_IMAGE_BY_ID = {
  "db-ai-technology-ai-technology-sensussoft-com-0":
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=85",
  "db-ai-technology-ai-technology-parkezi-com-au-5":
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1600&q=85",
  "db-figma-design-figma-design-mauritious-2":
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1600&q=85",
  "db-figma-design-figma-design-meal-app-5":
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=85",
  "db-figma-design-figma-design-task-book-6":
    "https://images.unsplash.com/photo-1561070792505-d74c8e5e2c9c?auto=format&fit=crop&w=1600&q=85",
  "db-figma-design-figma-design-goworkspain-9":
    "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1600&q=85",
  "db-figma-design-figma-design-rmnevents-com-14":
    "https://images.unsplash.com/photo-1542744173-8e7e5348bb0c?auto=format&fit=crop&w=1600&q=85",
  "db-figma-design-figma-design-play-google-com-19":
    "https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&w=1600&q=85",
  "db-figma-design-figma-design-figma-com-29":
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85",
  "db-figma-design-figma-design-prioritysoft-io-30":
    "https://images.unsplash.com/photo-1586714045002-7a5546362694?auto=format&fit=crop&w=1600&q=85",
  "db-figma-design-figma-design-artificial-intelligence-31":
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=85",
  "db-figma-design-figma-design-figma-com-13":
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=85",
  "db-figma-design-figma-design-figma-com-15":
    "https://images.unsplash.com/photo-1561070792505-d74c8e5e2c9c?auto=format&fit=crop&w=1600&q=85",
  "db-figma-design-figma-design-play-google-com-16":
    "https://images.unsplash.com/photo-1555774699-20d11a53e2f5?auto=format&fit=crop&w=1600&q=85",
  "db-figma-design-figma-design-play-google-com-18":
    "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1600&q=85",
  "db-figma-design-figma-design-figma-com-20":
    "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=85",
  "db-figma-design-figma-design-figma-com-21":
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=85",
  "db-figma-design-figma-design-figma-com-24":
    "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?auto=format&fit=crop&w=1600&q=85",
  "db-figma-design-figma-design-figma-com-26":
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=85",
  "db-figma-design-figma-design-figma-com-27":
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85",
  "db-ai-technology-ai-technology-leadlyft-com-8":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
};

function applyForcedImageOverrides(projects) {
  return projects.map((project) => {
    const forcedImage = FORCED_IMAGE_BY_ID[project.id];
    if (!forcedImage) return project;
    return { ...project, image: forcedImage };
  });
}

async function main() {
  if (!fs.existsSync(databaseRoot)) {
    console.warn(`[build-database-portfolio] Database folder not found at ${databaseRoot}. Writing empty export.`);
    const emptyPath = path.join(projectRoot, "src", "data", "databasePortfolioData.ts");
    fs.writeFileSync(
      emptyPath,
      `// Auto-generated by scripts/build-database-portfolio.mjs\nimport type { PortfolioProject } from "./portfolioData";\nexport const databaseSoftwareProjects: PortfolioProject[] = [];\n`
    );
    return;
  }

  const mobile = mobileAppProjects();
  const figma = figmaProjects();
  const ai = aiTechProjects();
  let all = [...mobile, ...figma, ...ai];
  all = await enrichPortfolioImages(all);
  all = applyLiveImageryFallbacks(all);
  all = applyForcedImageOverrides(all);

  const tsSimple = `// Auto-generated by scripts/build-database-portfolio.mjs — do not edit by hand.
import type { PortfolioProject } from "./portfolioData";

export const databaseSoftwareProjects: PortfolioProject[] = ${JSON.stringify(all, null, 2)};
`;

  const outPath = path.join(projectRoot, "src", "data", "databasePortfolioData.ts");
  fs.writeFileSync(outPath, tsSimple, "utf8");
  console.log(
    `[build-database-portfolio] Wrote ${all.length} projects (${mobile.length} mobile, ${figma.length} figma, ${ai.length} AI links) -> ${path.relative(projectRoot, outPath)}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
