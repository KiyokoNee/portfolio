export const siteSections = ['home', 'projects', 'tools', 'contact'] as const;
export type SiteSection = (typeof siteSections)[number];