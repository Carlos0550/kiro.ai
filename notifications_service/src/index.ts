import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import makeBot from "./makeBot";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => res.send("Notifications Service OK"));

makeBot(); // IniciÃ¡ el bot de WhatsApp con Baileys

app.listen(process.env.PORT || 3000, () => {
  console.log("Notifications service running...");
});
