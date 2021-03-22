import localForage from 'localforage';
import { combineReducers } from 'redux';
import { createTransform, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const preventRehydrationWithExpiredToken = createTransform<any, any>(
  inboundState => inboundState,
  outboundState => {
    if (outboundState.tokenExpiresAt) {
      const expiresAt = new Date(outboundState.tokenExpiresAt);
      if (expiresAt > new Date()) return outboundState;
    }
    return undefined;
  },
  { whitelist: ['persistedAuth'] },
);

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const rootReducer = combineReducers({ state: () => ({}) });

type PureAppState = ReturnType<typeof rootReducer>;
export const persistedReducer = persistReducer<PureAppState>(
  {
    key: 'root',
    storage: localForage,
    transforms: [preventRehydrationWithExpiredToken],
    stateReconciler: autoMergeLevel2 as any,
    timeout: 0,
  },
  rootReducer,
);
