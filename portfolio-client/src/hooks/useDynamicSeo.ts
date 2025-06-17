import {pageMeta} from "../config/siteMeta.ts";
import {useEffect, useState} from "react";

function getCurrentSection(): keyof typeof pageMeta | null {
    // Get all section elements with id matching keys in pageMeta
    const sections = Object.keys(pageMeta).map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    // Calculate which section is most visible in viewport
    let maxVisibleArea = 0;
    let visibleSection: keyof typeof pageMeta | null = null;

    const viewportHeight = window.innerHeight;

    for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > viewportHeight) continue; // outside viewport

        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        if (visibleHeight > maxVisibleArea) {
            maxVisibleArea = visibleHeight;
            visibleSection = section.id as keyof typeof pageMeta;
        }
    }
    return visibleSection;
}

export function useDynamicSeo() {
    const [currentSection, setCurrentSection] = useState<keyof typeof pageMeta | null>(null);

    useEffect(() => {
        function onScroll() {
            const section = getCurrentSection();
            if (section && section !== currentSection) {
                setCurrentSection(section);
            }
        }

        // Run on mount
        onScroll();

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [currentSection]);

    // Update SEO meta when currentSection changes
    useEffect(() => {
        if (!currentSection) return;

        const { title, description } = pageMeta[currentSection];
        document.title = title;

        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement("meta");
            metaDesc.setAttribute("name", "description");
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute("content", description);
    }, [currentSection]);
}