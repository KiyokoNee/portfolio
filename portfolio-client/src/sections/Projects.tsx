import { SectionWrapper } from "../components/SectionWrapper.tsx";
import { ProjectCard } from "../components/ProjectCard.tsx";

const dummyProjects = [
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

export const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <div>
                <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {dummyProjects.map((project, i) => (
                        <ProjectCard key={i} {...project} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};