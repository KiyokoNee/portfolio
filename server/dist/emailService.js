import nodemailer from "nodemailer";
export const sendContactEmail = async ({ name, email, message }) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `New message from ${name} via portfolio contact form`,
        text: message,
        html: `
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br/>")}</p>
        `
    };
    return transporter.sendMail(mailOptions);
};
