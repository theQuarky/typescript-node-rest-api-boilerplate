import * as express from 'express';
export const conform = (req:express.Request, res:express.Response, next:express.NextFunction) => {
    return res.send('test');
} 