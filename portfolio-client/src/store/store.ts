import {configureStore} from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice.ts";

const initialState = {

}

export const store = configureStore({
    reducer: {
        theme: themeSlice
    },
    preloadedState: initialState
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch