import express, { Request, Response } from "express";

import { logger } from "./logger";

const app = express();

app.use(logger);

app.get("/hello", async (req: Request, res: Response): Promise<void> => {
    res.json("Acessou a rota 'hello'...");
});

export { app };
