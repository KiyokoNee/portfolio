import axios from "axios";
import type {ContactFormData} from "../types/types.ts";

export const http = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
})

export const sendContactEmail = async (contactData: ContactFormData) => {
    return await http.post("/contact", contactData)
}