import express from 'express';
import rateLimit from 'express-rate-limit';
import socialStatsRouter from './routes/socialStats';
import { authMiddleware } from './middleware/authMiddleware'; // Adjust path if needed

import { PORT } from './config';
import { Request, Response, NextFunction } from 'express';


const app = express();

// Rate Limiting Middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later."
});

app.use(limiter);
// app.use(authMiddleware);

// Routes
app.use('/api', socialStatsRouter);

// Error Handling Middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ error: err.message });
  });
  

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
