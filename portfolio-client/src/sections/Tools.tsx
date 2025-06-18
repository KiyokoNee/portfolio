import { SectionWrapper } from "../components/SectionWrapper.tsx";

// Simple list of skills/tech stack items with optional colors and icons
const toolsData = [
    { name: "Java", bgColor: "bg-yellow-300", textColor: "text-yellow-900" },
    { name: "Spring Boot", bgColor: "bg-green-300", textColor: "text-green-900" },
    { name: "Spring Security", bgColor: "bg-green-400", textColor: "text-green-900" },
    { name: "React", bgColor: "bg-sky-300", textColor: "text-sky-900" },
    { name: "TypeScript", bgColor: "bg-blue-300", textColor: "text-blue-900" },
    { name: "MySQL", bgColor: "bg-cyan-300", textColor: "text-cyan-900" },
    { name: "Tailwind CSS", bgColor: "bg-teal-300", textColor: "text-teal-900" },
    { name: "Git & GitHub", bgColor: "bg-zinc-300", textColor: "text-zinc-900" },
];

export const Tools = () => {
    return (
        <SectionWrapper id="tools">
            <div>
                <h2 className="text-3xl font-bold mb-8 text-center">Skills & Tools</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {toolsData.map(({ name, bgColor, textColor }) => (
                        <div
                            key={name}
                            className={`flex items-center justify-center rounded-lg px-4 py-2 font-semibold 
    shadow-md transition-transform hover:scale-105 cursor-default select-none 
    ${bgColor} ${textColor} 
    border border-white/40 dark:border-none 
    shadow-[0_2px_8px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_4px_rgba(0,0,0,0.25)]`}
                            title={name}
                        >
                            {name}
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};