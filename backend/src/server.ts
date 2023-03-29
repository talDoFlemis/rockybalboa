import { config } from "dotenv";
import express, { Request, Response } from "express";
import bodyParser from "body-parser"
import marcelo from "./usuarios";

config();

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/dados", (req: Request, res: Response) => {
  res.status(200).json(marcelo);
});

app.post("/criar", (req: Request, res: Response) => {
  const body = req.body
  const nome = body?.nome
  const idade = body?.idade
  const email = body?.email

  if (!nome || !idade || !email) {
    res.status(400).send("Dados inválidos")
  }

  res.status(201).send(`Meu nome é ${nome} e tenho ${idade} anos e meu email é ${email}`);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

process.on("SIGTERM", () => {
  console.info("SIGTERM signal received.");
});

process.on("SIGINT", () => process.exit(1));
