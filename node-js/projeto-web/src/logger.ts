import { NextFunction, Request, Response } from "express";

const logger = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const inicio = Date.now();
    next();
    const final = Date.now();

    const { method, originalUrl } = req;
    const { statusCode } = res;
    const log = `${method.toUpperCase()} ${originalUrl} ${statusCode} ${(final - inicio)}ms.`;

    console.log(log);
};

export { logger };
