import reducer, { setLoading, fetchLaunches, launchesFetched } from '../launches.slice';
import { launchesMocks } from '../../../mocks/launches.mocks';

describe('Launches Slice', () => {
  const initialState = {
    isLoading: true,
    list: [],
  };

  const anyType: any = {};

  it('should return the initial state', () => {
    expect(reducer(undefined, anyType)).toEqual(initialState);
  });

  it('should set isLoading to true when setLoading is called with true', () => {
    expect(reducer(undefined, setLoading(true))).toEqual({
      isLoading: true,
      list: [],
    });
  });

  it('should set isLoading to false when setLoading is called with false', () => {
    expect(reducer(undefined, setLoading(false))).toEqual({ ...initialState, isLoading: false });
  });

  it('should not change the state when fetchLaunches is called', () => {
    expect(reducer(undefined, fetchLaunches(50))).toEqual(initialState);
  });

  it('should update the launches of the state when launchesFetched is called', () => {
    expect(reducer(undefined, launchesFetched(launchesMocks))).toEqual({
      isLoading: false,
      list: launchesMocks,
    });
  });
});
