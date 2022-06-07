import {Request,Response,NextFunction} from 'express';
import {HttpException} from '../exceptions/http.exception';
import { IErrorResponse } from '../types/response.types';
import {UriNotFound} from '../exceptions/url.exceptions';

export const ErrorResponse = (err: HttpException, req: Request, res: Response, next: NextFunction) : void => {
    const bad_response: IErrorResponse = {
        status: err.statusCode || 500,
        message: err.message,
        stack: err.stack || 'No trace stack.',
    };
    next();
    res.status(bad_response.status).json(bad_response);
}

export const UriError = (req: Request, res: Response, next: NextFunction): void => {
    console.log(`url: ${req.url} not found...`);
    next(new UriNotFound(req.url));
}