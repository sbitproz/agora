import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { catchError } from 'rxjs/operators';
import launchEpic from 'components/Launches/launches.epic';

export const epicMiddleware = createEpicMiddleware();

const epics: any[] = [...launchEpic];

export const rootEpic = (action$: any, store$: any, dependencies: any): any =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error: any, source: any) => {
      console.error(error);
      return source;
    }),
  );
