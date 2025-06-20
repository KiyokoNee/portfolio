import type {ContactFormData} from "../types/types.ts";
import {sendContactEmail} from "../config/customAxios.ts";

export const ContactForm = () => {
    const onSubmit = async (data: ContactFormData)=> {
        await sendContactEmail(data)
            .then()
            .catch()
    }
    return (
        <></>
    )
}