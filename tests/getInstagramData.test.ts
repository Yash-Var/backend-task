import axios from 'axios';
import cache from '../src/cache';
import getInstagramData from '../src/services/instagramService';

jest.mock('axios');
jest.mock('../src/cache');

describe('getInstagramData', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  const mockedCache = cache as jest.Mocked<typeof cache>;

  const mockData = [
    {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      },
      {
        albumId: 2,
        id: 2,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return cached data if available', async () => {
    mockedCache.get.mockReturnValue(mockData);

    const data = await getInstagramData();

    expect(data).toEqual(mockData);
    expect(mockedCache.get).toHaveBeenCalledWith('instagramData');
    expect(axios.get).not.toHaveBeenCalled();
  });

  it('should fetch data from API if cache is empty and cache the data', async () => {
    mockedCache.get.mockReturnValue(null);
    mockedAxios.get.mockResolvedValue({ data: mockData });

    const data = await getInstagramData();

    expect(data).toEqual(mockData);
    expect(mockedCache.get).toHaveBeenCalledWith('instagramData');
    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/photos?albumId=1');
    expect(mockedCache.set).toHaveBeenCalledWith('instagramData', mockData);
  });

  it('should throw an error if the API request fails', async () => {
    mockedCache.get.mockReturnValue(null);
    mockedAxios.get.mockRejectedValue(new Error('API Error'));

    await expect(getInstagramData()).rejects.toThrow('Error fetching data from Instagram API');

    expect(mockedCache.get).toHaveBeenCalledWith('instagramData');
    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/photos?albumId=1');
  });
});
