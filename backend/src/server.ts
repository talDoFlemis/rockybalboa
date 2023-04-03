import { config } from "dotenv";
import express, { Request, Response } from "express";
import bodyParser from "body-parser"
import cors from "cors"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

config();

const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/dados", async (req: Request, res: Response) => {
  const resp = await prisma.mxVagabundo.findMany()
  res.status(200).json(resp);
});

app.post("/criar", async (req: Request, res: Response) => {
  const body = req.body

  const name = body?.name
  const address = body?.address
  const email = body?.email
  const number = body?.number


  if (!name || !address || !email || !number) {
    res.status(400).send("Dados inválidos")
  }

  const parsedNumber = parseInt(number)

  try {
    const user = await prisma.mxVagabundo.create({
      data: {
        email: email,
        name: name,
        address: address,
        number: parsedNumber,
      },
    })
    res.status(201).json(user)
  } catch (err) {
    res.status(400).send("Email duplicado")
  }
});



app.listen(4000, () => {
  console.log("Server is running on port 4000");
});


process.on("SIGTERM", () => {
  console.info("SIGTERM signal received.");
});

process.on("SIGINT", () => process.exit(1));
