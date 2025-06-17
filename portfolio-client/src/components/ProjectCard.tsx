type ProjectCardProps = {
    title: string;
    description: string;
    tags: string[];
    link?: string;
};

export const ProjectCard = ({ title, description, tags, link }: ProjectCardProps) => {
    return (
        <div className="bg-white bg-opacity-10 dark:bg-[#334155] border border-zinc-200 dark:border dark:border-[#475569] rounded-lg p-6 shadow-sm transition-colors">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 dark:text-zinc-300 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-sky-900 dark:text-sky-300 rounded"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-sky-400 hover:underline"
                >
                    View Project →
                </a>
            )}
        </div>
    );
};