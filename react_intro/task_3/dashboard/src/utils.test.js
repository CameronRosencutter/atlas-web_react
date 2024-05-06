import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';

describe('getFullYear', () => {
  it('returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
});

describe('getFooterCopy', () => {
  it('returns "Holberton School" when the argument is true', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
  });

  it('returns "Holberton School main dashboard" when the argument is false', () => {
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  });
});

describe('getLatestNotification', () => {
  it('returns the correct string', () => {
    const notification = getLatestNotification();
    expect(notification).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
