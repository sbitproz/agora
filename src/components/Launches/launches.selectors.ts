import { createSelector } from 'reselect';
import { State } from '../../store/store.interfaces';
import { LaunchState } from './launches.slice';

export const launchesSelector = (state: State) => state.launches;

export const selectLaunches = createSelector(launchesSelector, (launch: LaunchState) => launch.list);
