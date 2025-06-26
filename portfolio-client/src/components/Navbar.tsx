import {DarkModeToggle} from "./DarkModeToggle.tsx";
import {RxCross2} from "react-icons/rx";
import {IoIosMenu} from "react-icons/io";
import {siteSections} from "../config/siteSections.ts";
import {pageMeta} from "../config/siteMeta.ts";
import {useActiveSection} from "../hooks/useActiveSection.ts";
import {Link, useNavigate} from "react-router-dom";
import {useSectionLink} from "../hooks/useSectionLink.ts";
import {type Dispatch, type SetStateAction, useEffect} from "react";

type Props = {
    navBarOpen: boolean,
    setNavBarOpen: Dispatch<SetStateAction<boolean>>
}

export const Navbar = ({navBarOpen,setNavBarOpen}:Props) => {
    const activeSection = useActiveSection();
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
                            {siteSections.map(({ id, type }) => (
                                <li
                                    key={id}
                                    className={`px-6 py-3 text-lg sm:text-sm sm:inline-block hover-glow relative ${
                                        id === activeSection ? "nav-active" : ""
                                    }`}
                                >
                                    <Link
                                        role={"link"}
                                        tabIndex={0}
                                        to={type === "page" ? `/${id}` : `/#${id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setNavBarOpen(false);

                                            if (type === "page") {
                                                navigate(`/${id}`);
                                            } else {
                                                handleSectionLink(id); // defined in the hook below
                                            }
                                        }}
                                        className="cursor-pointer"
                                    >
                                        {pageMeta[id].title.split(" | ")[0]}

                                        {/* Decorative stars */}
                                        {id === "home" && (
                                            <div
                                                className="star sm:top-2 sm:right-3 top-13 left-22"
                                                style={{ animationDelay: "0.6s" }}
                                            />
                                        )}
                                        {id === "tools" && (
                                            <div
                                                className="star sm:top-8 sm:left-[-5px] top-15 left-10"
                                                style={{
                                                    boxShadow: "0 0 3px 1px rgba(255, 255, 255, 0.5)",
                                                    animationDelay: "0.9s",
                                                }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Dark mode toggle */}
                        <DarkModeToggle/>

                        {/* Hamburger toggle */}
                        <button
                            onClick={() => setNavBarOpen(!navBarOpen)}
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