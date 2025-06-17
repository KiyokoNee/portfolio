import './App.css'
import {Navbar} from "./components/Navbar.tsx";
import {ProfileFooter} from "./components/ProfileFooter.tsx";
import {Hero} from "./sections/Hero.tsx";
import {Projects} from "./sections/Projects.tsx";
import {Tools} from "./sections/Tools.tsx";
import {Contact} from "./sections/Contact.tsx";
import {useSelector} from "react-redux";
import type {AppRootState} from "./store/store.ts";
import {useEffect} from "react";
import {useDynamicSeo} from "./hooks/useDynamicSeo.ts";

function App() {
    const {mode} = useSelector((state:AppRootState) => state.theme)

    useDynamicSeo()

    useEffect(() => {
        document.documentElement.classList.toggle("dark", mode === "dark")
    }, [mode])

    return (
        <div >
            <Navbar />
            <main className="flex flex-col min-h-screen bg-gradient-to-b from-white to-[#ccefff] dark:from-[#1e293b] dark:to-[#0f172a] text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                <Hero />
                <Projects />
                <Tools />
                <Contact />
            </main>
            <ProfileFooter />
        </div>
    )
}

export default App
