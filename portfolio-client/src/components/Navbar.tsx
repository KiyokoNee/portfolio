export const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-gradient-to-b from-[#e0f7ff] to-white dark:from-[#0f172a] dark:to-[#1e293b] text-gray-800 dark:text-gray-200 py-4 px-6 shadow-md transition-colors duration-500">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo / Site Name with stars */}
                <div className="text-2xl font-bold tracking-tight relative">
                    <a href="/" className="hover-glow">SkySite</a>
                    {/* Stars near logo */}
                    <div className="star" style={{ top: '-6px', left: '-12px', animationDelay: '0s' }} />
                    <div className="star" style={{ top: '34px', left: '60px', boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.6)', animationDelay: '0.3s' }} />
                </div>

                {/* Navigation with stars */}
                <nav className="space-x-6 text-sm font-medium hidden sm:block relative">
                    {['Home', 'Features', 'Docs', 'Contact'].map((link, i) => (
                        <a
                            href="#"
                            key={link}
                            className="hover-glow"
                            style={{ position: 'relative' }}
                        >
                            {link}
                            {/* Randomly sprinkle a star near some links */}
                            {i === 1 && <div className="star" style={{ top: '-8px', right: '-10px', animationDelay: '0.6s' }} />}
                            {i === 3 && <div className="star" style={{ top: '6px', left: '-10px', boxShadow: '0 0 3px 1px rgba(255, 255, 255, 0.5)', animationDelay: '0.9s' }} />}
                        </a>
                    ))}
                </nav>

                {/* Optional: Dark mode toggle or menu icon */}
                <div className="sm:hidden">
                    {/* Mobile menu or dark mode toggle can go here */}
                    <button className="text-xl">☰</button>
                </div>
            </div>
        </header>
    )
}