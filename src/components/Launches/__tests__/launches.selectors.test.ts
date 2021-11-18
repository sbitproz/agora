import { launchesSelector, selectLaunches } from '../launches.selectors';

describe('Launches Selector', () => {
  const storeState = {
    launches: {
      isLoading: false,
      list: [],
    },
  };

  it('should return the launches state', () => {
    expect(launchesSelector(storeState)).toBe(storeState.launches);
  });

  it('should return the launches list state', () => {
    expect(selectLaunches(storeState)).toBe(storeState.launches.list);
  });
});
