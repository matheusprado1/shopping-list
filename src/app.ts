import express, { Application, json, Request, Response } from "express";

const app: Application = express();

app.use(json());

app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({ status: "ok" })
});

const PORT: number = 3000;
const runningMsg: string = `Server running on http://localhost:${PORT}`;

app.listen(PORT, () => console.log(runningMsg));