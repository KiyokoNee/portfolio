import {SectionWrapper} from "../components/SectionWrapper.tsx";

export const Hero = () => {
    return (
        <SectionWrapper id="home">
            <div className="flex flex-col items-center text-center gap-6 py-20">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                    <span className="block">Hi, I’m <span className="text-blue-600 dark:text-sky-300">KiyokoNee</span>.</span>
                </h1>

                <p>
                    <span className="block text-2xl sm:text-3xl">I build clean, functional web experiences.</span>
                </p>

                <p className="text-lg sm:text-xl max-w-2xl text-gray-600 dark:text-zinc-300">
                    A problem-solving developer with a strong grasp of Object-Oriented Design in Java and a full-stack toolkit built on <strong>Spring Boot</strong>, <strong>React</strong>, and <strong>TypeScript</strong>. I care about both the frontend polish <em>and</em> the backend architecture that makes it all work.
                </p>

                <p className="text-md sm:text-lg text-gray-500 dark:text-zinc-400 max-w-xl">
                    B.S. in Computer Science, Minor in Game Design — always learning, always refining.
                </p>

                <div className="flex gap-4 mt-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 rounded-full bg-blue-600 text-white dark:bg-sky-500 dark:text-zinc-900 hover:bg-blue-700 dark:hover:bg-sky-400 transition-colors"
                    >
                        View My Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 rounded-full border border-blue-600 dark:border-sky-500 text-blue-600 dark:text-sky-400 hover:bg-blue-50 dark:hover:bg-zinc-800 transition-colors"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </SectionWrapper>
    )
}