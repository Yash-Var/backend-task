import express from 'express';
import getTwitterData from '../services/twitterService';
import getInstagramData from '../services/instagramService';

const router = express.Router();

// GET /api/social-stats: Return aggregated stats from multiple platforms
router.get('/social-stats', async (req, res, next) => {
  try {
    const [twitterData, instagramData] = await Promise.all([
      getTwitterData(),
      getInstagramData()
    ]);
    res.json({ twitterData, instagramData });
  } catch (error) {
    next(error);
  }
});

// GET /api/platform/:platform: Return detailed stats for a specific platform
router.get('/platform/:platform', async (req, res, next) => {
  const { platform } = req.params;
  
  try {
    let data;
    switch (platform.toLowerCase()) {
      case 'twitter':
        data = await getTwitterData();
        break;
      case 'instagram':
        data = await getInstagramData();
        break;
      default:
        return res.status(400).json({ error: 'Platform not supported' });
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
});

export default router;
