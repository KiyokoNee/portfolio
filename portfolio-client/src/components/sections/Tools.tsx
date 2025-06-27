import { SectionWrapper } from "../SectionWrapper.tsx";
import {skillsAndTools} from "../../data/tools.ts";

export const Tools = () => {
    return (
        <SectionWrapper id="tools">
            <div>
                <h2 id="tools-heading" className="text-3xl font-bold mb-8 text-center">Skills & Tools</h2>
                <div className="space-y-10 max-w-5xl mx-auto">
                    {Object.entries(skillsAndTools).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-xl font-semibold mb-4 text-sky-700 dark:text-sky-300">{category}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {items.map(({ name, bgColor, textColor }) => (
                                    <div
                                        key={name}
                                        className={`flex items-center justify-center rounded-lg px-4 py-2 font-semibold 
                    shadow-md transition-transform hover:scale-105 cursor-default select-none 
                    ${bgColor} ${textColor} 
                    border border-slate-400 dark:border-slate-600
                    shadow-[0_2px_8px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)]`}
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