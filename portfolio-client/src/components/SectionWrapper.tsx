import type {ReactNode} from "react";

type SectionWrapperProps = {
    children: ReactNode,
    id?: string
}

export const SectionWrapper = ({children, id}: SectionWrapperProps) => {
    return (
        <section id={id} className="max-w-4xl mx-auto p-4">
            {children}
        </section>
    )
}