import * as express from 'express';

export const login: express.RequestHandler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    return next();
};