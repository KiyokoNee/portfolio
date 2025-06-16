import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type ThemeState = {
    mode: "light" | "dark"
}

const getInitialTheme = ():ThemeState => {
    const stored = localStorage.getItem("theme")
    if (stored === "light" || stored === "dark") return {mode: stored};

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark").matches
    return {mode: prefersDark ? "dark" : "light"}
}

const themeSlice = createSlice({
    name: "theme",
    initialState: getInitialTheme(),
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === "dark" ? "light" : "dark";
            localStorage.setItem("theme", state.mode)
        },
        setTheme: (state, action:PayloadAction<"light" | "dark">) => {
            state.mode = action.payload;
            localStorage.setItem("theme", action.payload)
        }
    }
})

export const {toggleTheme, setTheme} = themeSlice.actions
export default themeSlice.reducer