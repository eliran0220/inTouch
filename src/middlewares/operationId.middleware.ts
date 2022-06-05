import { NextFunction, Request, Response } from 'express';
import pkg from 'uuid';
const { v4: uuidv4 } = pkg;

export const addIDToRequest = (req: Request, res: Response, next: NextFunction): void => {
    req.operation_id = uuidv4();
    next();
}

