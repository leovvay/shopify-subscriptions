import { createStore, applyMiddleware, DeepPartial } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-cycle
import { persistedReducer, rootReducer } from './rootReducer';

export type AppState = ReturnType<typeof persistedReducer>;

const enhancer = composeWithDevTools(applyMiddleware(thunk));

export const configureStoreWithoutReduxPerist = (
  initialState?: DeepPartial<AppState>,
) => createStore(rootReducer, initialState, enhancer);

export const configureStore = (initialState?: DeepPartial<any>) => {
  const store = createStore(persistedReducer, initialState, enhancer);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(persistedReducer);
    });
  }

  const persistor = persistStore(store);
  return { persistor, store };
};
