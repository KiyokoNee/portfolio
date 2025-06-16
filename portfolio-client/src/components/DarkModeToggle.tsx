import {useDispatch, useSelector} from "react-redux";
import type {AppRootState} from "../store/store.ts";
import {toggleTheme} from "../store/slices/themeSlice.ts";
import {FaMoon, FaSun} from "react-icons/fa";

export const DarkModeToggle = () => {
    const {mode} = useSelector((state:AppRootState) => state.theme)
    const dispatch = useDispatch()

    const handleToggle = () => dispatch(toggleTheme())

    return (
        <div className="relative" aria-label="Toggle for dark mode">
            <button
                role="switch"
                aria-checked={mode === "dark"}
                onClick={handleToggle}
                className={`dark-mode-switch ${mode === "dark" ? "bg-slate-800" : "bg-sky-200"}`}
            >
                <span
                    className={`dark-mode-knob ${mode === "dark" ? "translate-x-5" : "translate-x-0" }`}
                >
                    {
                        mode === "dark" ?
                            <FaMoon size={12} className="text-purple-400" /> :
                            <FaSun size={12} className="text-amber-600" />
                    }
                </span>
            </button>
        </div>
    )
}