import { IProduct } from 'types/types';
import { getProducts } from './api';

describe('App', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  test('api', async () => {
    const data: IProduct[] = [];

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => data,
      })
    );

    const card = await getProducts('1111');
    expect(card).toBe(data);
  });
});
