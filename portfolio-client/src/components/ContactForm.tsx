import type {ContactFormData} from "../types/types.ts";
import {sendContactEmail} from "../config/customAxios.ts";
import toast from "react-hot-toast";
import {type SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {BarLoader} from "react-spinners";
import {SmartInput} from "./fields/SmartInput.tsx";
import {SmartTextArea} from "./fields/SmartTextArea.tsx";

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting}} = useForm<ContactFormData>({
        mode: "onChange"
    });

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
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full max-w-xl space-y-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 p-6 shadow-lg ring-1 ring-zinc-200 dark:ring-slate-700 backdrop-blur"
        >
            <SmartInput
                id={"name"}
                label={"Name"}
                registerField={register("name", {required: "Name is required"})}
                error={errors.name?.message}
            />
            <SmartInput
                id={"email"}
                type={"email"}
                label={"Email"}
                registerField={
                register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+com+$/,
                        message: "Invalid email"
                    }
                })}
                error={errors.email?.message}
            />
            <SmartTextArea
                id={"message"}
                label={"Message"}
                register={register("message", {required: "Message is required"})}
                error={errors.message?.message}
            />
            <button
                type={"submit"}
                disabled={isSubmitting}
                className="w-50 mx-auto rounded-lg bg-sky-500 hover:bg-sky-600 dark:bg-violet-600 dark:hover:bg-violet-700 px-4 py-2 text-white font-semibold transition-colors disabled:opacity-50"
            >
                {
                    isSubmitting ?
                        <p className="flex flex-col justify-center"><BarLoader color="#ffffff" className="mx-auto" />Sending...</p> :
                        "Send"}
            </button>
        </form>
    )
}