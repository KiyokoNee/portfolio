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
import {ErrorPage} from "./pages/ErrorPage.tsx";

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
            <main aria-hidden={navBarOpen} tabIndex={navBarOpen ? -1 : undefined} id="main-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/*" element={<ErrorPage />} />
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
