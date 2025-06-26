import './App.css'
import {Navbar} from "./components/Navbar.tsx";
import {ProfileFooter} from "./components/ProfileFooter.tsx";
import {useSelector} from "react-redux";
import type {AppRootState} from "./store/store.ts";
import {useEffect, useState} from "react";
import {useDynamicSeo} from "./hooks/useDynamicSeo.ts";
import {HomePage} from "./pages/HomePage.tsx";
import {ContactPage} from "./pages/ContactPage.tsx";
import {Route, Routes} from "react-router-dom";
import {Toaster} from "react-hot-toast";

function App() {
    const [navBarOpen, setNavBarOpen] = useState<boolean>(false)
    const {mode} = useSelector((state:AppRootState) => state.theme)

    useDynamicSeo()

    useEffect(() => {
        document.documentElement.classList.toggle("dark", mode === "dark")
    }, [mode])

    return (
        <div>
            <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
            <Navbar navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} />
            <main aria-hidden={navBarOpen} tabIndex={navBarOpen ? -1 : undefined} id="main-content" className="flex flex-col min-h-screen bg-gradient-to-b from-white to-[#ccefff] dark:from-[#1e293b] dark:to-[#0f172a] text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Toaster
                    position="bottom-center"
                    toastOptions={{
                        style: {
                            background: mode === "dark" ? "#1e293b" : "#e0f7ff",
                            color: mode === "dark" ? "#f1f5f9" : "#0f172a",
                            border: mode === "dark" ? "1px solid #334155" : "1px solid #bae6fd",
                        },
                        success: {
                            iconTheme: {
                                primary: "#0ea5e9", // sky-500
                                secondary: "#ffffff",
                            },
                        },
                    }}
                />
            </main>
            <ProfileFooter />
        </div>
    )
}

export default App
