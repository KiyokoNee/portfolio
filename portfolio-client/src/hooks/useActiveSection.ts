import {useEffect, useState} from "react";
import {siteSections} from "../config/siteSections.ts";
import {useLocation} from "react-router-dom";

export const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState<string>("home");
    const location = useLocation();

    useEffect(() => {
        if(location.pathname !== "/") {
            const match = siteSections.find(s => s.type === "page" && location.pathname.includes(s.id));
            if(match) setActiveSection(match.id)
            return;
        }

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

        siteSections
            .filter(s => s.type === "section")
            .forEach(({id}) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        })

        return () => observer.disconnect();
    }, [location.pathname]);

    return activeSection;
}