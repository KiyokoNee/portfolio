import {pageMeta, siteMeta} from "../config/siteMeta.ts";
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

function updateMetaTag(nameOrProperty: string, content: string, isProperty = false) {
    const attr = isProperty ? "property" : "name";
    let tag = document.querySelector(`meta[${attr}="${nameOrProperty}"]`);
    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, nameOrProperty);
        document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
}

export function useDynamicSeo() {
    const [currentSection, setCurrentSection] = useState<keyof typeof pageMeta | null>(null);

    useEffect(() => {
        let timeout: number;

        function onScroll() {
            clearTimeout(timeout);
            timeout = window.setTimeout(() => {
                const section = getCurrentSection();
                if (section && section !== currentSection) {
                    setCurrentSection(section);
                }
            }, 150)
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

        // Standard meta description
        updateMetaTag("description", description);

        // Open Graph metadata
        updateMetaTag("og:title", title, true);
        updateMetaTag("og:description", description, true);
        updateMetaTag("og:type", "website", true);
        updateMetaTag("og:site_name", siteMeta.handle, true);
        updateMetaTag("og:url", window.location.href, true); // or a fixed domain + path

        // Twitter metadata
        updateMetaTag("twitter:title", title);
        updateMetaTag("twitter:description", description);
        updateMetaTag("twitter:card", "summary_large_image");
    }, [currentSection]);
}