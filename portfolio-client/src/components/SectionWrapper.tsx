import type {ReactNode} from "react";

type SectionWrapperProps = {
    children: ReactNode,
    id?: string
}

export const SectionWrapper = ({children, id}: SectionWrapperProps) => {
    return (
        <section id={id} className="max-w-4xl mx-auto px-4 py-24 sm:py-32">
            {children}
        </section>
    )
}