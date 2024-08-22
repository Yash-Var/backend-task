// @ts-ignore
import request from 'supertest';
import express from 'express';
import router from '../src/routes/socialStats';
import getTwitterData from '../src/services/twitterService';
import getInstagramData from '../src/services/instagramService';
import { authMiddleware } from '../src/middleware/authMiddleware';


jest.mock('../src/services/twitterService');
jest.mock('../src/services/instagramService');

const app = express();
const headers = process.env.API_KEY || 'mysecureapikey';
app.use(express.json());
app.use(authMiddleware);
app.use('/api', router);

describe('Social Stats API Routes', () => {
  const mockedGetTwitterData = getTwitterData as jest.MockedFunction<typeof getTwitterData>;
  const mockedGetInstagramData = getInstagramData as jest.MockedFunction<typeof getInstagramData>;

  const mockTwitterData = [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
  ];

  const mockInstagramData = [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952"
    }
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return aggregated stats from Twitter and Instagram', async () => {
    mockedGetTwitterData.mockResolvedValue(mockTwitterData);
    mockedGetInstagramData.mockResolvedValue(mockInstagramData);

    const response = await request(app)
      .get('/api/social-stats')
      .set('x-api-key', headers); 

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      twitterData: mockTwitterData,
      instagramData: mockInstagramData,
    });
    expect(mockedGetTwitterData).toHaveBeenCalledTimes(1);
    expect(mockedGetInstagramData).toHaveBeenCalledTimes(1);
  });

  it('should return detailed stats for Twitter', async () => {
    mockedGetTwitterData.mockResolvedValue(mockTwitterData);

    const response = await request(app)
      .get('/api/platform/twitter')
      .set('x-api-key', headers); 

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockTwitterData);
    expect(mockedGetTwitterData).toHaveBeenCalledTimes(1);
  });

  it('should return detailed stats for Instagram', async () => {
    mockedGetInstagramData.mockResolvedValue(mockInstagramData);

    const response = await request(app)
      .get('/api/platform/instagram')
      .set('x-api-key', headers);  

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockInstagramData);
    expect(mockedGetInstagramData).toHaveBeenCalledTimes(1);
  });

  it('should return 400 error for unsupported platform', async () => {
    const response = await request(app)
      .get('/api/platform/facebook')
      .set('x-api-key', headers); 

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'Platform not supported');
  });
});
