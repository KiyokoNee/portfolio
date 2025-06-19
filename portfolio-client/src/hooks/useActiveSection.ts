import {useEffect, useState} from "react";
import {siteSections} from "../config/siteSections.ts";

export const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState<string>("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);
                if(visible?.target.id) {
                    setActiveSection(visible.target.id)
                }
            },
            {
                rootMargin: "-30% 0px -50% 0px",
                threshold: 0.1
            }
        );

        siteSections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        })

        return () => observer.disconnect();
    }, []);

    return activeSection;
}