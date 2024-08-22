import axios from 'axios';
import cache from '../src/cache';
import getTwitterData from '../src/services/twitterService';

jest.mock('axios');
jest.mock('../src/cache');

describe('getTwitterData', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  const mockedCache = cache as jest.Mocked<typeof cache>;

  const mockData = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return cached data if available', async () => {
    mockedCache.get.mockReturnValue(mockData);

    const data = await getTwitterData();

    expect(data).toEqual(mockData);
    expect(mockedCache.get).toHaveBeenCalledWith('twitterData');
    expect(axios.get).not.toHaveBeenCalled();
  });

  it('should fetch data from API if cache is empty and cache the data', async () => {
    mockedCache.get.mockReturnValue(null);
    mockedAxios.get.mockResolvedValue({ data: mockData });

    const data = await getTwitterData();

    expect(data).toEqual(mockData);
    expect(mockedCache.get).toHaveBeenCalledWith('twitterData');
    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1/posts');
    expect(mockedCache.set).toHaveBeenCalledWith('twitterData', mockData);
  });

  it('should throw an error if the API request fails', async () => {
    mockedCache.get.mockReturnValue(null);
    mockedAxios.get.mockRejectedValue(new Error('API Error'));

    await expect(getTwitterData()).rejects.toThrow('Error fetching data from Twitter API');

    expect(mockedCache.get).toHaveBeenCalledWith('twitterData');
    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1/posts');
  });
});
