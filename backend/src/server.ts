import { config } from "dotenv";
import express, { Request, Response } from "express";
import bodyParser from "body-parser"
import marcelo from "./usuarios";
import cors from "cors"

config();

const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/dados", (req: Request, res: Response) => {
  res.status(200).json(marcelo);
});

app.post("/criar", (req: Request, res: Response) => {
  const body = req.body

  const name = body?.name
  const address = body?.address
  const email = body?.email
  const number = body?.number

  if (!name || !address || !email || !number) {
    res.status(400).send("Dados inválidos")
  }

  res.status(201).send(`Meu nome é ${name} e tenho ${address} anos e meu email é ${email} e meu número é ${number}`);
});


app.listen(4000, () => {
  console.log("Server is running on port 4000");
});


process.on("SIGTERM", () => {
  console.info("SIGTERM signal received.");
});

process.on("SIGINT", () => process.exit(1));
