import {DarkModeToggle} from "./DarkModeToggle.tsx";
import {useState} from "react";
import {RxCross2} from "react-icons/rx";
import {IoIosMenu} from "react-icons/io";

const navLinks = [
    {label: 'Home', href: '#home'},
    {label: 'Projects', href: '#projects'},
    {label: 'Toolbox', href: '#tools'},
    {label: 'Contact', href: '#contact'},
]

export const Navbar = () => {
    const [navBarOpen, setNavBarOpen] = useState<boolean>(false)

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
                <div className="relative flex items-center gap-4">
                    {/* Navigation with stars */}
                    {/* Nav + Toggle + Dark Mode */}
                    <nav className="relative flex items-center gap-4">
                        {/* Nav links */}
                        <ul
                            className={`
                            
    transition-max-height duration-300 ease-in-out overflow-hidden
    flex flex-col w-full max-h-0 pb-0

    ${navBarOpen ? "max-h-[500px] pb-5" : ""}
    
    bg-gradient-to-b from-[#e0f7ff] to-white dark:from-[#0f172a] dark:to-[#1e293b]
    absolute left-0 right-0 top-full

    sm:static sm:max-h-none sm:overflow-visible sm:flex-row sm:flex sm:w-auto
    sm:bg-none sm:dark:bg-none sm:pb-0
                            `}
                        >
                            {navLinks.map(({label, href}) => (
                                <li key={label} className="sm:inline-block px-4 py-2 hover-glow">
                                    <a href={href}>{label}</a>
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