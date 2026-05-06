import {
  customSoftwareProjects,
  figmaPortfolioProjects,
  mobileAppPortfolioProjects,
  qaTestingProjects,
  type PortfolioProject,
} from "./data/portfolioData";
import { allBlogPosts, type BlogPost } from "./components/Blog";

/** Includes mobile-tab-only entries so `/portfolio/:id` resolves after navigation from Mobile Apps. */
const allPortfolioProjects: PortfolioProject[] = [
  ...customSoftwareProjects,
  ...figmaPortfolioProjects,
  ...qaTestingProjects,
  ...mobileAppPortfolioProjects,
];

export function tabToPath(tab: string): string {
  if (!tab || tab === "home") return "/";
  return `/${tab}`;
}

/** Active nav tab id from pathname (for MegaNavigation highlight). */
export function pathToActiveTab(pathname: string): string {
  if (pathname === "/" || pathname === "") return "home";
  if (pathname.startsWith("/portfolio/")) return "portfolio";
  if (pathname.startsWith("/blog/post/")) return "blog";
  const first = pathname.replace(/^\//, "").split("/")[0];
  return first || "home";
}

/** Routes that belong to the About menu (includes former Team links). Used only for nav highlight. */
const ABOUT_NAV_ROUTES = new Set([
  "about",
  "leadership",
  "our-team",
  "tech-talent",
  "culture",
  "careers",
  "faq",
  "contact",
  "tech-blog",
  "ebooks",
  "journey",
]);

/**
 * Which top-level nav item should appear active (e.g. About covers many path segments).
 */
export function navigationHighlightId(pathname: string): string {
  if (!pathname || pathname === "/") return "home";
  if (pathname.startsWith("/portfolio")) return "portfolio";
  if (pathname.startsWith("/blog")) return "knowledge-center";

  const first = pathname.replace(/^\//, "").split("/")[0] || "home";
  const knowledgeSub = new Set([
    "case-studies",
    "webinars",
    "whitepapers",
    "guides",
    "industry-insights",
  ]);
  if (knowledgeSub.has(first)) return "knowledge-center";

  if (first === "team") return "about";
  if (ABOUT_NAV_ROUTES.has(first)) return "about";
  return first;
}

export interface KnowledgeResourceRoute {
  categoryId: string;
  slug: string;
}

export interface ResolvedRoute {
  activeTab: string;
  portfolioProject: PortfolioProject | null;
  blogPost: BlogPost | null;
  /** Slug page under a Knowledge Center category (or featured `/blog/:slug`). */
  knowledgeResource: KnowledgeResourceRoute | null;
}

export function resolveRoute(pathname: string): ResolvedRoute {
  if (pathname === "/" || pathname === "") {
    return {
      activeTab: "home",
      portfolioProject: null,
      blogPost: null,
      knowledgeResource: null,
    };
  }

  const portfolioMatch = pathname.match(/^\/portfolio\/([^/]+)$/);
  if (portfolioMatch) {
    const id = decodeURIComponent(portfolioMatch[1]);
    const portfolioProject =
      allPortfolioProjects.find((p) => p.id === id) ?? null;
    return {
      activeTab: "portfolio",
      portfolioProject,
      blogPost: null,
      knowledgeResource: null,
    };
  }

  const blogMatch = pathname.match(/^\/blog\/post\/(.+)$/);
  if (blogMatch) {
    const raw = blogMatch[1];
    let title: string;
    try {
      title = decodeURIComponent(raw);
    } catch {
      title = raw;
    }
    const blogPost = allBlogPosts.find((p) => p.title === title) ?? null;
    return {
      activeTab: "blog",
      portfolioProject: null,
      blogPost,
      knowledgeResource: null,
    };
  }

  const kcResourceMatch = pathname.match(
    /^\/(case-studies|guides|webinars|whitepapers|industry-insights)\/([^/]+)$/
  );
  if (kcResourceMatch) {
    const categoryId = kcResourceMatch[1];
    let slug: string;
    try {
      slug = decodeURIComponent(kcResourceMatch[2]);
    } catch {
      slug = kcResourceMatch[2];
    }
    return {
      activeTab: categoryId,
      portfolioProject: null,
      blogPost: null,
      knowledgeResource: { categoryId, slug },
    };
  }

  const blogFeaturedMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (blogFeaturedMatch) {
    const seg = blogFeaturedMatch[1];
    if (seg !== "post") {
      let slug: string;
      try {
        slug = decodeURIComponent(seg);
      } catch {
        slug = seg;
      }
      return {
        activeTab: "blog",
        portfolioProject: null,
        blogPost: null,
        knowledgeResource: { categoryId: "blog", slug },
      };
    }
  }

  const first = pathname.replace(/^\//, "").split("/")[0];
  const activeTab = first === "home" ? "home" : first || "home";
  return {
    activeTab,
    portfolioProject: null,
    blogPost: null,
    knowledgeResource: null,
  };
}
