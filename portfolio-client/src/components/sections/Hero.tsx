import {SectionWrapper} from "./SectionWrapper.tsx";
import {siteMeta} from "../../config/siteMeta.ts";
import {useSectionLink} from "../../hooks/useSectionLink.ts";

export const Hero = () => {
    const handleSectionLink = useSectionLink();

    return (
        <SectionWrapper id="hero">
            <div className="flex flex-col items-center text-center gap-6">
                <h1 id="hero-heading" className="text-4xl sm:text-5xl font-bold leading-tight">
                    <span className="block">Hi, I’m <span className="text-blue-600 dark:text-sky-300">{siteMeta.handle}</span>.</span>
                </h1>

                <p>
                    <span className="block text-2xl sm:text-3xl">
                        I design reliable software for web platforms.
                    </span>
                </p>

                <p className="hero-intro">
                    I'm a software developer focused on building maintainable fullstack systems using <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Spring Boot</strong>. I enjoy crafting clear UI workflows and dependable backend services.
                </p>

                <p className="hero-sub">
                    B.S. in Computer Science, Minor in Game Design — always learning, always refining.
                </p>

                <div className="flex gap-4 mt-4">
                    <button
                        onClick={() => handleSectionLink("projects")}
                        className="project-view"
                    >
                        View My Projects
                    </button>
                    <a
                        href={`/contact`}
                        className="contact-outline"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </SectionWrapper>
    )
}