import express from 'express';
import rateLimit from 'express-rate-limit';
import socialStatsRouter from './routes/socialStats';
import { authMiddleware } from './middleware/authMiddleware'; 

import { PORT } from './config';
import { Request, Response, NextFunction } from 'express';


const app = express();


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: "Too many requests from this IP, please try again later."
});

app.use(limiter);
// app.use(authMiddleware);


app.use('/api', socialStatsRouter);


app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


