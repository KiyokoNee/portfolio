import type {ContactFormData} from "../types/types.ts";
import {sendContactEmail} from "../config/customAxios.ts";
import toast from "react-hot-toast";
import {type SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting}} = useForm<ContactFormData>();

    const navigate = useNavigate();
    
    const onSubmit:SubmitHandler<ContactFormData> = async (data: ContactFormData)=> {
        await sendContactEmail(data)
            .then(res => {
                toast.success(res?.data?.message || "Message successfully sent!", {duration: 2000});
                reset();
                navigate("/")
            })
            .catch(err => {
                toast(err?.response?.data?.error || "Message could not be sent.", {duration: 2000})
            })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Name:
                <input {...register("name", {required: "Name is required"})}/>
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </label>
            <label>
                Email:
                <input type="email" {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address.",
                    }
                })}/>
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </label>
            <label>
                Message:
                <textarea {...register("message", {required: "Message is required"})} />
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </label>
            <button type={"submit"} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send"}
            </button>
        </form>
    )
}