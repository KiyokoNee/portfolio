import { SectionWrapper } from "../SectionWrapper.tsx";
import {skillsAndTools} from "../../data/tools.ts";

export const Tools = () => {
    return (
        <SectionWrapper id="tools">
            <div>
                <h2 id="tools-heading" className="text-3xl font-bold mb-8 text-center">Skills & Tools</h2>
                <p id="tools-description" className="sr-only">
                    Overview of key technologies and tools used regularly.
                </p>
                <div className="space-y-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {Object.entries(skillsAndTools).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="category-heading">{category}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {items.map(({ name, bgColor, textColor }) => (
                                    <div
                                        key={name}
                                        className={`tool-chip ${bgColor} ${textColor}`}
                                        title={name}
                                    >
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};