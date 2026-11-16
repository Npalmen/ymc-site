/** Apply to CMS-provided links too, including legacy paths and absolute site URLs. */
export function isPublicHref(href: string, communityEnabled = false, distributionEnabled = false) {
  let path: string;
  try { path = decodeURIComponent(new URL(href, "https://yellowmusicunited.se").pathname).toLowerCase(); }
  catch { return false; }
  if (/(^|\/)praktik(?:\/|$)/.test(path)) return false;
  if (!distributionEnabled && /^\/(tjanster\/distribution|distribution|ge-ut-musik|musikutgivning|podcast)(\/|$)/.test(path)) return false;
  return communityEnabled || !/^\/(community|yellowmusic-blogg|post)(\/|$)/.test(path);
}
