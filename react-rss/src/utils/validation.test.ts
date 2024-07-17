import { act } from 'react-dom/test-utils';
import { validCountry, validDate, validName } from './validation';

describe('Check validation', () => {
  it('should return valid name', async () => {
    await act(() => {
      expect(validName('N')).toBe(false);
      expect(validName('Yes')).toBe(true);
    });
  });
  test('should return country', async () => {
    await act(() => {
      expect(validCountry('new')).toBe(true);
      expect(validCountry('')).toBe(false);
    });
  });

  test('should return false if input date < 1900 year', () => {
    expect(validDate('1899-01-01')).toBeFalsy();
  });
});
