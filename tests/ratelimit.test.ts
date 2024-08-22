import request from 'supertest';
import express from 'express';
import rateLimit from 'express-rate-limit';

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5,
  handler: (req, res) => {
    res.status(429).json({ message: "Too many requests from this IP, please try again later." });
  }
});

app.use(limiter);
app.get('/test', (req, res) => res.status(200).send('OK'));

describe('Rate Limiting Middleware', () => {
  it('should rate limit requests', async () => {
    const requests: Promise<request.Response>[] = [];
    
    for (let i = 0; i < 10; i++) {
      requests.push(request(app).get('/test'));
    }

    const responses = await Promise.all(requests);

    responses.slice(0, 5).forEach(response => {
      expect(response.status).toBe(200);
    });

    responses.slice(5).forEach(response => {
      expect(response.status).toBe(429);
      expect(response.body).toHaveProperty('message', 'Too many requests from this IP, please try again later.');
    });
  });
});
