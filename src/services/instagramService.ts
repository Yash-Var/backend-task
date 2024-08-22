import axios from 'axios';
import cache from '../cache';

const getInstagramData = async () => {
  const cacheKey = 'instagramData';
  const cachedData = cache.get(cacheKey);

  if (cachedData) return cachedData;

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1');
    const data = response.data;
    cache.set(cacheKey, data);
    return data;
  } catch (error) {
    throw new Error('Error fetching data from Instagram API');
  }
};

export default getInstagramData;
