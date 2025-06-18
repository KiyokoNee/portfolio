import {SectionWrapper} from "../components/SectionWrapper.tsx";
import {siteMeta} from "../config/siteMeta.ts";
import {FaArrowRight} from "react-icons/fa";

export const Contact = () => {
    return (
        <SectionWrapper id="contact">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>

                <p className="text-lg text-gray-700 dark:text-zinc-300 mb-6">
                    Whether you're interested in collaboration, freelance work, or just want to say hello —
                    feel free to reach out! I'm always open to meaningful conversations and new challenges.
                    Clicking the button below will open your default email app.
                </p>

                <a
                    href={`mailto:${siteMeta.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white dark:bg-sky-500 dark:text-zinc-900 hover:bg-blue-700 dark:hover:bg-sky-400 transition-colors font-medium"
                >
                    Say Hello <FaArrowRight />
                </a>

                {/* Optional: Add this later if you want links */}
                {/*
        <div className="mt-6 flex justify-center gap-4">
          <a href="https://github.com/kiyokonee" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-sky-400 hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-sky-400 hover:underline">LinkedIn</a>
        </div>
        */}
            </div>
        </SectionWrapper>
    )
}