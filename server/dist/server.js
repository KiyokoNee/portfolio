import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.post("/api/contact", async (req, res) => {
    res.status(200).json({ message: "It works!" });
});
app.get("/", (_req, res) => {
    res.send("Contact API is running.");
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
