import {type JSX, useEffect, useRef} from "react";
import {siteMeta} from "../config/siteMeta.ts";
import { FaGithub, FaLinkedin, FaMastodon, FaTwitter, FaYoutube, FaCode} from "react-icons/fa";
import {HiOutlineDocumentText, HiOutlineMail} from "react-icons/hi";
import { PiGlobeSimpleBold } from "react-icons/pi";

const socialIcons: Record<string, JSX.Element> = {
    github: <FaGithub className="inline-block mr-2" />,
    linkedin: <FaLinkedin className="inline-block mr-2" />,
    twitter: <FaTwitter className="inline-block mr-2" />,
    mastodon: <FaMastodon className="inline-block mr-2" />,
    youtube: <FaYoutube className="inline-block mr-2" />,
};

const siteIcons: Record<string, JSX.Element> = {
    resume: <HiOutlineDocumentText className="inline-block mr-2" />,
    blog: <PiGlobeSimpleBold className="inline-block mr-2" />,
    source: <FaCode className="inline-block mr-2" />,
};


export const ProfileFooter = () => {
    const starLayerRef = useRef<HTMLDivElement>(null);
    const {handle, socialLinks, siteLinks} = siteMeta;

    // Create shooting star element and add it to starLayerRef container
    const createShootingStar = () => {
        if (!starLayerRef.current) return;

        const container = document.createElement("div");
        container.className = "shooting-star-container";
        container.style.top = `${Math.random() * 100 - 25}%`;
        container.style.left = `${Math.random() * 100 - 25}%`;

        const head = document.createElement("div");
        head.className = "shooting-star-head";

        const tail = document.createElement("div");
        tail.className = "shooting-star-tail";

        container.appendChild(tail);
        container.appendChild(head);

        starLayerRef.current.appendChild(container);

        setTimeout(() => {
            container.remove();
        }, 3000);
    };

    // Effect to spawn shooting stars randomly in dark mode only
    useEffect(() => {
        let intervalId: number | null = null;

        function trySpawnStar() {
            const isDark = true //document.documentElement.classList.contains("dark");
            if (isDark) {
                createShootingStar();
            }
        }

        // Spawn a star every 5-15 seconds randomly
        function startInterval() {
            intervalId = window.setInterval(() => {
                trySpawnStar();
            }, 5000 + Math.random() * 10000);
        }

        startInterval();

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, []);
    return (
        <footer className="relative bg-gradient-to-b from-[#ccefff] to-white dark:from-[#0f172a] dark:to-[#1e293b] text-gray-700 dark:text-gray-300 py-16 px-6 overflow-hidden transition-colors duration-500">
            {/* Sky Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Light Mode Clouds */}
                <div className="block dark:hidden">
                    <div className="cloud cloud-1"></div>
                    <div className="cloud cloud-2"></div>
                    <div className="cloud cloud-3"></div>
                </div>

                {/* Dark Mode Stars + Moon */}
                <div className="hidden dark:block" ref={starLayerRef}>
                    {/* Existing twinkling stars */}
                    <div className="star star-1"></div>
                    <div className="star star-2"></div>
                    <div className="star star-3"></div>
                    <div className="star star-4"></div>

                    {/* Additional static stars with color variation */}
                    <div className="star-extra" style={{ top: "18%", left: "35%", backgroundColor: "#c7d2fe" }} />
                    <div className="star-extra" style={{ top: "32%", left: "60%", backgroundColor: "#fbcfe8" }} />
                    <div className="star-extra" style={{ top: "50%", left: "75%", backgroundColor: "#a5f3fc" }} />
                    <div className="star-extra" style={{ top: "22%", left: "15%", backgroundColor: "#ddd6fe" }} />
                    <div className="star-extra" style={{ top: "38%", left: "5%", backgroundColor: "#fef3c7" }} />

                    {/* Moon */}
                    <div className="hidden md:block moon">
                        <span className="crater-edge"></span>
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm dark:md:pt-12">
                <div>
                    <h4 className="font-bold text-lg mb-3">About Me</h4>
                    <p>Passionate software developer specializing in TypeScript and React. Crafting clean, user-friendly web experiences.</p>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-3">Contact</h4>
                    <ul className="space-y-1">
                        <li>
                            <a href="/contact" className="hover:underline flex items-center">
                                <HiOutlineMail className="inline-block mr-2" />
                                Email
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-3">Social</h4>
                    <ul className="space-y-1">
                        {Object.entries(socialLinks).map(([key, url]) =>
                            url ? (
                                <li key={key}>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        {socialIcons[key] ?? null}
                                        <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                    </a>
                                </li>
                            ) : null
                        )}
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-3">Site</h4>
                    <ul className="space-y-1">
                        {Object.entries(siteLinks).map(([key, url]) =>
                            url ? (
                                <li key={key}>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        {siteIcons[key] ?? null}
                                        <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                    </a>
                                </li>
                            ) : null
                        )}
                    </ul>
                </div>
            </div>

            <div className="relative z-10 text-center text-xs mt-10 text-gray-500">
                &copy; {new Date().getFullYear()} {handle}. All rights reserved.
            </div>
        </footer>
    )
}