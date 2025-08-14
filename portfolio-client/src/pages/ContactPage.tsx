import {ContactForm} from "../components/ContactForm.tsx";

export const ContactPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-cover bg-center"
        >
            <div className="shadow-lg rounded-lg p-8 w-full max-w-lg">
                <h1 className="text-4xl font-bold text-center mb-6">Contact Me!</h1>
                <p className="text-center mb-4">
                    I would love to hear from you! Please fill out the form below or contact me directly:
                </p>

                <ContactForm />
            </div>
        </div>
    )
}