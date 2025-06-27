import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { navLinks } from "../config/navLinks.ts";
import { pageMeta, siteMeta } from "../config/siteMeta.ts";

// Helper: create or update <meta> tags
function updateMetaTag(nameOrProp: string, content: string, isProperty = false) {
    const attr = isProperty ? "property" : "name";
    let tag = document.querySelector(`meta[${attr}="${nameOrProp}"]`);
    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, nameOrProp);
        document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
}

// Helper: get most visible section based on height in viewport
function getMostVisibleSection(sectionIds: string[]): string | null {
    const viewportHeight = window.innerHeight;
    let maxVisible = 0;
    let bestMatch: string | null = null;

    for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > viewportHeight) continue;

        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        if (visibleHeight > maxVisible) {
            maxVisible = visibleHeight;
            bestMatch = id;
        }
    }

    return bestMatch;
}

export function useDynamicSeo() {
    const location = useLocation();
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const currentPage = navLinks.find(link => link.path === location.pathname);
        const sectionIds = currentPage?.sections?.map(s => s.id);

        if (sectionIds && sectionIds.length > 0) {
            let timeout: number;

            function onScroll() {
                clearTimeout(timeout);
                timeout = window.setTimeout(() => {
                    const section = getMostVisibleSection(sectionIds || []);
                    if (section && section !== activeId) {
                        setActiveId(section);
                    }
                }, 150);
            }

            onScroll(); // Initial check
            window.addEventListener("scroll", onScroll, { passive: true });
            return () => window.removeEventListener("scroll", onScroll);
        } else {
            if (currentPage && currentPage.id !== activeId) {
                setActiveId(currentPage.id);
            }
        }
    }, [location.pathname]);

    useEffect(() => {
        if (!activeId || !pageMeta[activeId]) return;

        const { title, description } = pageMeta[activeId];
        document.title = title;

        updateMetaTag("description", description);
        updateMetaTag("og:title", title, true);
        updateMetaTag("og:description", description, true);
        updateMetaTag("og:type", "website", true);
        updateMetaTag("og:site_name", siteMeta.handle, true);
        updateMetaTag("og:url", window.location.href, true);
        updateMetaTag("twitter:title", title);
        updateMetaTag("twitter:description", description);
        updateMetaTag("twitter:card", "summary_large_image");
    }, [activeId]);
}
