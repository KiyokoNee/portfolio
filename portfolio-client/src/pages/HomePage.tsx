import {Hero} from "../components/sections/Hero.tsx";
import {Projects} from "../components/sections/Projects.tsx";
import {Tools} from "../components/sections/Tools.tsx";
import {useEffect} from "react";

export const HomePage = () => {

    useEffect(() => {
        const hash = sessionStorage.getItem("scrollTarget");
        if(hash) {
            const el = document.getElementById(hash);
            if (el) {
                el.scrollIntoView({behavior: "smooth"})
            }
        }
        sessionStorage.removeItem("scrollTarget");
    }, []);

    return (
        <>
            <Hero />
            <Projects />
            <Tools />
        </>
    )
}