import express, { Request, Response, Express, json } from "express";

const app: Express = express();
app.use(json());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
});

export default app;
