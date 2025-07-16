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
            className="contact-form-wrapper"
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
                className="submit-button"
            >
                {
                    isSubmitting ?
                        <p className="flex flex-col justify-center"><BarLoader color="#ffffff" className="mx-auto" />Sending...</p> :
                        "Send"}
            </button>
        </form>
    )
}