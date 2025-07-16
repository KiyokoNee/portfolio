import {DarkModeToggle} from "./DarkModeToggle.tsx";
import {RxCross2} from "react-icons/rx";
import {IoIosMenu} from "react-icons/io";
import {navLinks} from "../../config/navLinks.ts";
import {useNavigate} from "react-router-dom";
import {useSectionLink} from "../../hooks/useSectionLink.ts";
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
            className="sticky top-0 z-50 site-gradient text-gray-800 dark:text-gray-200 py-4 px-6 shadow-md">
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
                            className={`nav-list nav-transition ${navBarOpen ? "max-h-[500px] pb-5" : ""}`}
                        >
                            {navLinks.map(({ id, label, path, sections }) => (
                                <li key={id} className="nav-item group">
                                    {sections ? (
                                        <div>
                                            <button
                                                className={`nav-link hover-glow ${
                                                    openDropdown === id ? "nav-active" : ""
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
                                                className={`nav-dropdown ${openDropdown === id ? "block" : "hidden"}`}
                                            >
                                                {sections.map((section) => (
                                                    <li key={section.id}>
                                                        <button
                                                            className="nav-dropdown-button hover:bg-blue-100 dark:hover:bg-zinc-700"
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
                                                className="nav-link hover-glow"
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