import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { epicMiddleware, rootEpic } from './epic';
import middlewares from './middleware';
import { rootReducer } from './reducers';

function configureStore() {
  const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(...middlewares)));

  epicMiddleware.run(rootEpic);

  return store;
}

export const store = configureStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
