import { combineReducers } from 'redux';

import launches from 'components/Launches/launches.slice';

export const rootReducer = combineReducers({
  launches,
});
