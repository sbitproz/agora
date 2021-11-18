import { of } from 'rxjs';
import { launchesFetchEpic } from '../launches.epic';
import { API } from 'api/api.conf';
import * as storeHook from '../launches.slice';
import { launchesMocks60 } from '../../../mocks/launches.mocks';
jest.mock('api/api.conf');

const { fetchLaunches } = storeHook;

describe('Launches Epic', () => {
  const MAX_LAUNCHES = 50;
  const getSpy = jest.spyOn(API, 'get');

  const normalResponse = { status: 200, statusText: 'OK', headers: [], config: {} };

  beforeEach(() => {
    getSpy.mockImplementation(() => of({ ...normalResponse, data: [] }));
  });

  it('should return the latest 50 launches', (done) => {
    getSpy.mockImplementation(() => of({ ...normalResponse, data: launchesMocks60 }));
    const output$ = launchesFetchEpic(of<any>(fetchLaunches(MAX_LAUNCHES)));
    output$.subscribe((action: any) => {
      expect(action.payload.length).toEqual(MAX_LAUNCHES);
      done();
    });
  });

  it('should make an API call to launches', (done) => {
    const getSpy = jest.spyOn(API, 'get');
    getSpy.mockImplementation(() => of({ ...normalResponse, data: [] }));
    const output$ = launchesFetchEpic(of(fetchLaunches(MAX_LAUNCHES)));
    output$.subscribe(() => {
      expect(API.get).toHaveBeenCalledWith(expect.stringContaining('launches'));
      done();
    });
  });

  it('should return with dispatch launchesFetched', (done) => {
    const launchesFetchedSpy = jest.spyOn(storeHook, 'launchesFetched');
    const output$ = launchesFetchEpic(of(fetchLaunches(MAX_LAUNCHES)));
    output$.subscribe(() => {
      expect(launchesFetchedSpy).toHaveBeenCalledWith([]);
      done();
    });
  });
});
