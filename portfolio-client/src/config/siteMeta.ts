type siteMetaData = {
    handle: string,
    fullName: string,
    showFullName: boolean,
    tagline: string,
    domain: string,
    email: string
}


type pageSpecificData = {
    title: string,
    description: string
}

type pageMetaData = {
    home: pageSpecificData,
    projects: pageSpecificData,
    tools: pageSpecificData,
    contact: pageSpecificData
}

export const siteMeta:siteMetaData = {
    handle: "KiyokoNee",
    fullName: "Katherine Gearing",
    showFullName: false,
    tagline: "Toolmaker. Web developer. Clean UI enthusiast.",
    domain: "kiyokonee.dev",
    email: "kiyokonee@gmail.com"
}

export const pageMeta:pageMetaData = {
    home: {
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