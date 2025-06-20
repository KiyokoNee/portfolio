export const siteSections = [
    {id: "home", type: "section"},
    {id: "projects", type: "section"},
    {id: "tools", type: "section"},
    {id: "contact", type: "page"}] as const;
export type SiteSection = (typeof siteSections)[number]["id"];