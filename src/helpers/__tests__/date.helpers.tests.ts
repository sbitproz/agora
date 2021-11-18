import { formatDate } from 'helpers/date.helpers';

describe('Date helpers: formatDate', () => {
  it('should format the unix dates to MM/dd/yyyy', () => {
    expect(formatDate(1143239400)).toBe('03/24/2006');
  });
});
