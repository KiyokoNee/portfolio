import {SectionWrapper} from "./SectionWrapper.tsx";

export const Contact = () => {
    return (
        <SectionWrapper id="contact">
            <div className="text-center max-w-2xl mx-auto">
                <h2 id="contact-heading" className="text-3xl font-bold mb-4">Get In Touch</h2>

                <p className="text-lg text-gray-700 dark:text-zinc-300 mb-6">
                    Whether you're interested in collaboration, freelance work, or just want to say hello —
                    feel free to reach out! I'm always open to meaningful conversations and new challenges.
                    Clicking the button below will open your default email app.
                </p>


            </div>
        </SectionWrapper>
    )
}