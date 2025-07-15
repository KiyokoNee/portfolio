type ProjectCardProps = {
    title: string;
    description: string;
    tags: string[];
    link?: string;
};

export const ProjectCard = ({ title, description, tags, link }: ProjectCardProps) => {
    return (
        <article
            className="project-card"
            aria-labelledby={`project-${title.replace(/\s+/g, "-").toLowerCase()}-title`}
        >
            <header>
                <h2
                    id={`project-${title.replace(/\s+/g, "-").toLowerCase()}-title`}
                    className="project-title"
                >
                    {title}
                </h2>
            </header>

            <div className="mt-auto">
            <p className="project-description">{description}</p>
            <ul className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, i) => (
                    <li
                        key={i}
                        className="project-tag"
                    >
                        {tag}
                    </li>
                ))}
            </ul>
            {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View project details for ${title}`}
                    >
                        View Project<span aria-hidden={true}> →</span>
                    </a>
            )}
            </div>
        </article>
    );
};