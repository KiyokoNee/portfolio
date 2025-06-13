import './App.css'
import {Navbar} from "./components/Navbar.tsx";
import {ProfileFooter} from "./components/ProfileFooter.tsx";
import {Hero} from "./sections/Hero.tsx";
import {Projects} from "./sections/Projects.tsx";
import {Tools} from "./sections/Tools.tsx";
import {Contact} from "./sections/Contact.tsx";

function App() {

    return (
        <div >
            <Navbar />
            <main className="flex flex-col min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
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
