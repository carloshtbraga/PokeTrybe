import express, { Request, Response, Express, json } from "express";

const app: Express = express();
app.use(json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

export default app;
