import { Observable } from 'rxjs';
import { filter, switchMap, map } from 'rxjs/operators';
import { API } from 'api/api.conf';
import { API_ROUTES } from 'api/routes';
import { getData } from 'api/api.helpers';

import { fetchLaunches, launchesFetched } from './launches.slice';
import { Launches } from './launches.interface';
import { launchDateColumn } from './launches.constants';

export const launchesFetchEpic = (action$: Observable<any>) =>
  action$.pipe(
    filter((action) => fetchLaunches.match(action)),
    switchMap(({ payload: count }) => {
      return API.get<Launches>(`${API_ROUTES.LAUNCHES}?sort=${launchDateColumn.field}&order=desc`).pipe(
        getData<Launches>(),
        map<Launches, any>((data) => launchesFetched(data.slice(0, count))),
      );
    }),
  );

const launchEpic = [launchesFetchEpic];

export default launchEpic;
