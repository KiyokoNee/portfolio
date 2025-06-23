import express, {NextFunction, Request, Response} from "express";
import cors from "cors";
import {sendContactEmail} from "./emailService";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

const IP_BAN_THRESHOLD = 3;
const IP_BAN_DURATION = 60 * 60 * 1000;

const failedAttempts = new Map<string, {count: number; bannedUntil?: number}>();

const contactLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 1,
    handler: (req, res) => {
        const ip = req.ip as string;
        const record = failedAttempts.get(ip) || {count: 0};

        record.count += 1;

        if( record.count >= IP_BAN_THRESHOLD) {
            record.bannedUntil = Date.now() + IP_BAN_DURATION;
            console.warn(`IP ${ip} temporarily banned.`)
        }

        failedAttempts.set(ip, record);

        res.status(429).json({
            error: "Too many messages. Please wait a moment before trying again."
        })
    },
    standardHeaders: true,
    legacyHeaders: false,
})

const ipBanMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip as string;
    const record = failedAttempts.get(ip);

    if (record?.bannedUntil && Date.now() < record.bannedUntil) {
        res.status(403).json({
            error: "You have been temporarily blocked due to repeated misuse. Please try again later."
        })
        return;
    }

    next();
}

app.use(express.json(), cors());

app.get("/", (_req: Request, res: Response) => {
    res.send("Server is running");
});

app.post("/api/contact", ipBanMiddleware, contactLimiter, async (req: Request, res: Response) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        res.status(400).json({ error: "Missing required fields." });
        return;
    }

    try {
        await sendContactEmail({ name, email, message });
        failedAttempts.delete(req.ip as string)
        res.status(200).json({ message: "Email sent successfully." });
    } catch (err) {
        console.error("Error sending email:", err);
        res.status(500).json({ error: "Failed to send email." });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});