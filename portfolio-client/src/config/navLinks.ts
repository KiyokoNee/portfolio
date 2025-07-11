import type {Section} from "../types/types.ts";

export type NavLink = {
    id: string,
    label: string,
    path: string,
    sections?: Section[]
}

export const navLinks:NavLink[] = [
    {
        id: "home",
        label: "Home",
        path: "/",
        sections: [
            { id: "hero", label: "Intro"},
            { id: "projects", label: "Projects" },
            { id: "tools", label: "Tools" }
        ],
    },
    {
        id: "contact",
        label: "Contact",
        path: "/contact"
    },
] as const;