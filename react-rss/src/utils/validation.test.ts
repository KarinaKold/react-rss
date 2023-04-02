import { validDate } from './validation';

describe('Check validation', () => {
  test('Should return false if input date < 1900 year', () => {
    expect(validDate('1899-01-01')).toBeFalsy();
  });
});
