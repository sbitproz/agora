import { launchesColumnsConfig } from '../launches.constants';

describe('launches constants', () => {
  const launchDateColumn = launchesColumnsConfig[1];
  it('should format the unix time to a readable date', () => {
    expect(launchDateColumn.valueFormatter).toBeDefined();
    const formatterDate = launchDateColumn.valueFormatter || (() => {});
    expect(formatterDate({ value: 1222643700 })).toBe('09/29/2008');
  });

  it('should fail when formatting null to a readable date', () => {
    expect(launchDateColumn.valueFormatter).toBeDefined();
    const formatterDate = launchDateColumn.valueFormatter || (() => {});
    expect(formatterDate({ value: null })).not.toBe('09/29/2008');
  });
});
