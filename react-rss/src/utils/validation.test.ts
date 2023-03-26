import { validDate } from './validation';

describe('Check validation', () => {
  test('Should return false if input date smaller then 1900 year', () => {
    expect(validDate('1899-01-01')).toBeFalsy();
  });

  //   it('Should return false if input date more than today', () => {
  //     const tomorrow = new Date();
  //     tomorrow.setDate(tomorrow.getDate() + 1);
  //     const tomorrowStr = tomorrow.toISOString().split('T')[0];
  //     expect(checkIsDateValid(tomorrowStr)).toBeFalsy();
  //   });

  //   it('Should return true if input date is valid', () => {
  //     const today = new Date();
  //     const todayStr = today.toISOString().split('T')[0];
  //     expect(checkIsDateValid(todayStr)).toBeTruthy();
  //   });
});
