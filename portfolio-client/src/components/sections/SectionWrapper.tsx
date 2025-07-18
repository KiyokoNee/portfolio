import type {ReactNode} from "react";

type SectionWrapperProps = {
    children: ReactNode,
    id?: string
}

export const SectionWrapper = ({children, id}: SectionWrapperProps) => {
    const labelledBy = id ? `${id}-heading` : undefined

    return (
        <section id={id} aria-labelledby={labelledBy}>
            {children}
        </section>
    )
}