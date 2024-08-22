import axios from 'axios';
import cache from '../cache';

const getTwitterData = async () => {
  const cacheKey = 'twitterData';
  const cachedData = cache.get(cacheKey);
  
  if (cachedData) return cachedData;

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1/posts');
    const data = response.data;
    cache.set(cacheKey, data);
    return data;
  } catch (error) {
    throw new Error('Error fetching data from Twitter API');
  }
};

export default getTwitterData;
