import {DarkModeToggle} from "./DarkModeToggle.tsx";
import {RxCross2} from "react-icons/rx";
import {IoIosMenu} from "react-icons/io";
import {navLinks} from "../config/navLinks.ts";
import {useNavigate} from "react-router-dom";
import {useSectionLink} from "../hooks/useSectionLink.ts";
import {type Dispatch, type SetStateAction, useEffect, useState} from "react";
import {FiChevronDown} from "react-icons/fi";

type Props = {
    navBarOpen: boolean,
    setNavBarOpen: Dispatch<SetStateAction<boolean>>
}

export const Navbar = ({navBarOpen,setNavBarOpen}:Props) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const handleSectionLink = useSectionLink();
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = navBarOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };

    }, [navBarOpen]);

    return (
        <header
            className="sticky top-0 z-50 bg-gradient-to-b from-[#e0f7ff] to-white dark:from-[#0f172a] dark:to-[#1e293b] text-gray-800 dark:text-gray-200 py-4 px-6 shadow-md transition-colors duration-500">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo / Site Name with stars */}
                <div className="text-2xl font-bold tracking-tight relative">
                    <a href="/" className="hover-glow">KiyokoNee</a>
                    {/* Stars near logo */}
                    <div className="star" style={{top: '-6px', left: '-12px', animationDelay: '0s'}}/>
                    <div className="star" style={{
                        top: '34px',
                        left: '60px',
                        boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.6)',
                        animationDelay: '0.3s'
                    }}/>
                </div>

                {/* Right Side of Screen: NavLinks + Toggle + Menu Hamburger */}
                <div className="flex items-center gap-4">
                    {/* Navigation with stars */}
                    {/* Nav + Toggle + Dark Mode */}
                    <nav
                        className="flex items-center justify-end gap-4"
                        role="navigation"
                        aria-label="Main site navigation"
                    >
                        {/* Nav links */}
                        <ul
                            className={`transition-max-height duration-300 ease-in-out overflow-hidden flex flex-col w-full max-h-0 pb-0
                            ${navBarOpen ? "max-h-[500px] pb-5" : ""} bg-gradient-to-b from-[#e0f7ff] to-white dark:from-[#0f172a] dark:to-[#1e293b]
                            absolute left-0 right-0 top-full sm:static sm:max-h-none sm:overflow-visible sm:flex-row sm:flex sm:w-auto
                            sm:bg-none sm:dark:bg-none sm:pb-0
                            `}
                        >
                            {navLinks.map(({ id, label, path, sections }) => (
                                <li key={id} className="relative group px-6 py-3 sm:py-0">
                                    {sections ? (
                                        <div className="relative group">
                                            <button
                                                className={`text-left w-full sm:w-auto text-lg sm:text-sm flex items-center gap-1 transition-colors ${
                                                    openDropdown === id ? "text-blue-600 dark:text-sky-300 hover-glow" : "hover-glow"
                                                }`}
                                                onClick={() =>
                                                    setOpenDropdown(openDropdown === id ? null : id)
                                                }
                                                aria-haspopup="true"
                                                aria-expanded={openDropdown === id}
                                            >
                                                {label}
                                                <FiChevronDown
                                                    className={`transition-transform duration-200 sm:inline-block ${
                                                        openDropdown === id ? "rotate-180" : ""
                                                    }`}
                                                />
                                            </button>

                                            <ul
                                                className={`
      sm:absolute sm:top-full sm:left-0 sm:mt-2 sm:rounded-2xl sm:shadow-lg sm:z-50
      bg-gradient-to-b from-[#e0f7ff] to-white dark:from-[#1e293b] dark:to-[#0f172a]
      border border-zinc-200 dark:border-zinc-600
      sm:min-w-[180px] sm:py-2 sm:px-1
      ${openDropdown === id ? "block" : "hidden"}
    `}
                                            >
                                                {sections.map((section) => (
                                                    <li key={section.id}>
                                                        <button
                                                            className="w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-blue-100 dark:hover:bg-zinc-700 transition-colors"
                                                            onClick={() => {
                                                                handleSectionLink(section.id)
                                                                setNavBarOpen(false);
                                                                setOpenDropdown(null);
                                                            }}
                                                        >
                                                            {section.label}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <div className="relative group">
                                            <button
                                                onClick={() => {
                                                    setNavBarOpen(false);
                                                    navigate(path);
                                                }}
                                                className="text-left w-full sm:w-auto text-lg sm:text-sm flex items-center gap-1 transition-colors hover-glow"
                                            >
                                                {label}
                                            </button>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Dark mode toggle */}
                        <DarkModeToggle/>

                        {/* Hamburger toggle */}
                        <button
                            onClick={() => {
                                setNavBarOpen(!navBarOpen)
                                setOpenDropdown(null)
                            }}
                            className="sm:hidden text-3xl"
                            aria-label={navBarOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={navBarOpen}
                        >
                            {navBarOpen ? <RxCross2/> : <IoIosMenu/>}
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}