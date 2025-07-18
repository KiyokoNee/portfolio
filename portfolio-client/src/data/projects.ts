export type Project = {
    title: string,
    description: string,
    tags: string[],
    link?: string,
    image?: string,
    status?: "complete" | "in progress" | "paused",
    featured?: boolean,
    date?: string,
    tools?: string[],
    body?: string
}

export const dummyProjects:Project[] = [
    {
        title: "Portfolio Site",
        description: "This very site! Built from scratch using modern frontend tooling with a focus on accessibility and clean UI.",
        tags: ["Vite", "React", "Tailwind"],
        link: "https://github.com/KiyokoNee/portfolio"
    },
];