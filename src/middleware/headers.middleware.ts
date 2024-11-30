import { NextFunction, Request, Response } from 'express';

export const headersMiddleware = (_req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
    res.setHeader('Permissions-Policy', 'geolocation=(self), camera=(), microphone=()');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('X-Robots-Tag', 'noindex, nofollow');
    next();
};
