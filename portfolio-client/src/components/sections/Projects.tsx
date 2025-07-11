import { SectionWrapper } from "../SectionWrapper.tsx";
import { ProjectCard } from "../ProjectCard.tsx";
import {dummyProjects} from "../../data/projects.ts";

export const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <div>
                <h2 id="projects-heading" className="text-3xl font-bold mb-8 text-center">Projects</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {dummyProjects.map((project, i) => (
                        <ProjectCard key={i} {...project} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};