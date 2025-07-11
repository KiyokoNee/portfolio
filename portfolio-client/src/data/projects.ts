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
        title: "Clean Workspace Launcher",
        description: "A personal productivity tool for setting up distraction-free workflows with customizable routines.",
        tags: ["React", "TypeScript", "Tailwind"],
        link: "#"
    },
    {
        title: "Portfolio Site",
        description: "This very site! Built from scratch using modern frontend tooling with a focus on accessibility and clean UI.",
        tags: ["Vite", "React", "Tailwind"],
        link: "#"
    }
];