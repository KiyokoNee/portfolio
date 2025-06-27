import {navLinks} from "./navLinks.ts";

type siteMetaData = {
    handle: string,
    fullName: string,
    showFullName: boolean,
    tagline: string,
    domain: string,
    email: string,
    socialLinks: {
        github?: string,
        linkedin?: string, // Future use
        mastodon?: string,
        youtube?: string
    },
    siteLinks: {
        resume?: string, // Future use
        blog?: string,
        source?: string
    }
}


type pageSpecificData = {
    title: string,
    description: string
}

type PageId = typeof navLinks[number]["id"]

type pageMetaData = Record<PageId, pageSpecificData>

export const siteMeta:siteMetaData = {
    handle: "KiyokoNee",
    fullName: "Katherine Gearing",
    showFullName: false,
    tagline: "Toolmaker. Web developer. Clean UI enthusiast.",
    domain: "kiyokonee.dev",
    email: "kiyokonee@gmail.com",
    socialLinks: {
        github: "https://github.com/KiyokoNee",
    },
    siteLinks: {
        source: "https://github.com/KiyokoNee/portfolio"
    }
}

export const pageMeta:pageMetaData = {
    hero: {
        title: "KiyokoNee | Developer Portfolio",
        description: "Frontend developer & toolmaker. Clean UI, React/TS-focused projects.",
    },
    projects: {
        title: "Projects | KiyokoNee",
        description: "A showcase of professional and personal projects built using TypeScript, React, and modern frontend stacks.",
    },
    tools: {
        title: "Tools | KiyokoNee",
        description: "Hand-crafted tools and utilities designed to solve real problems with elegant design and UX.",
    },
    contact: {
        title: "Contact | KiyokoNee",
        description: "Get in touch with KiyokoNee for collaborations, freelance work, or general inquiries.",
    },
};