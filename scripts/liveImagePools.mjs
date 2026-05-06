/**
 * Curated Unsplash imagery: natural light, real people, contemporary workspaces / devices.
 * Used when OG images are missing so each portfolio card feels contextual and "alive".
 */
const U = (id, sig = "") =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85${sig ? `&${sig}` : ""}`;

/** @deprecated marker — old generic phone-in-hand stock used site-wide */
export const LEGACY_PLACEHOLDER_SUBSTR = "photo-1512941937669";

const MOBILE_LIVE = [
  U("photo-1556656793-085ad0b65422"),
  U("photo-1511707173874-efdd8970edd"),
  U("photo-1580910051076-51eb897e6e0e"),
  U("photo-1601784551446-20c9e07cdbdb"),
  U("photo-1611162617474-5b21e879e113"),
  U("photo-1555774699-20d11a53e2f5"),
  U("photo-1595675024853-0e5ad2fcab99"),
  U("photo-1523205771623-e0faa4d2813d"),
];

const DESIGN_LIVE = [
  U("photo-1561070792505-d74c8e5e2c9c"),
  U("photo-1586714045002-7a5546362694"),
  U("photo-1558655146-d09347e92766"),
  U("photo-1542744173-8e7e5348bb0c"),
  U("photo-1581291518633-83b4ebd1d83e"),
  U("photo-1600132806370-bf17e65e942f"),
  U("photo-1618005182384-a83a8bd57fbe"),
  U("photo-1626785774573-4b799314346d"),
];

const AI_TECH_LIVE = [
  U("photo-1677442136019-21780ecad995"),
  U("photo-1620712943543-bcc4688e7485"),
  U("photo-1531482615713-afd5e29c27d6"),
  U("photo-1555949963-ff9fe0c870eb"),
  U("photo-1516321318423-f06f85e504b3"),
  U("photo-1451187580459-43490279c0fa"),
  U("photo-1639322537228-f71d03bfc3d5"),
  U("photo-1504384308090-c894fdcc538d"),
];

const COLLAB_LIVE = [
  U("photo-1552664730-d307ca884978"),
  U("photo-1522071820081-009f0129c71c"),
  U("photo-1517248135467-4c7edcad34c4"),
  U("photo-1523240795612-9a054b0db644"),
  U("photo-1556761175-5973dc0f32e7"),
  U("photo-1600880292203-757bb62b4baf"),
  U("photo-1519389950473-47ba0277781c"),
  U("photo-1553877522-43269d4ea984"),
];

/** Single sentinel for legacy build paths; replaced by category-aware stock in apply step. */
export const BUILD_PLACEHOLDER_IMAGE = COLLAB_LIVE[0];

/** Curated fallbacks use this query signature so OG fetch can still upgrade them. */
export const STOCK_IMAGE_MARK = "w=1200&q=85";

function hashPick(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

export function pickLivePortfolioImage(category, projectId, index) {
  const c = String(category || "").toLowerCase();
  let pool = COLLAB_LIVE;
  if (c.includes("figma") || c.includes("design")) pool = DESIGN_LIVE;
  else if (c.includes("mobile")) pool = MOBILE_LIVE;
  else if (c.includes("ai") || c.includes("technology")) pool = AI_TECH_LIVE;
  const i = hashPick(`${projectId}|${index}|${c}`) % pool.length;
  return pool[i];
}

export function shouldReplaceWithLiveImagery(imageUrl, sentinel = BUILD_PLACEHOLDER_IMAGE) {
  if (!imageUrl || typeof imageUrl !== "string") return true;
  if (imageUrl.includes(LEGACY_PLACEHOLDER_SUBSTR)) return true;
  if (sentinel && imageUrl === sentinel) return true;
  return false;
}

/**
 * After OG enrichment: swap any legacy / missing hero so each row gets varied, contextual stock.
 */
export function applyLiveImageryFallbacks(projects, sentinel = BUILD_PLACEHOLDER_IMAGE) {
  return projects.map((p, index) => {
    if (!shouldReplaceWithLiveImagery(p.image, sentinel)) return p;
    return {
      ...p,
      image: pickLivePortfolioImage(p.category, p.id, index),
    };
  });
}
