import { Request, Response, NextFunction } from 'express';

const API_KEY = process.env.API_KEY || 'mysecureapikey';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== API_KEY) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
};
