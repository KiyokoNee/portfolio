import type {ReactNode} from "react";

export const SectionWrapper = ({children}: {children: ReactNode}) => {
    return (
        <section className="max-w-4xl mx-auto px-4 py-16">
            {children}
        </section>
    )
}