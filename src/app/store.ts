import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { combineReducers } from 'redux';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import uiReducer from '@/features/ui/uiSlice';
import { apiBase } from '@/app/api/baseApi';
import { createRootPersistConfig } from '@/app/cache/persistConfig';

// Root reducer combining the UI slice with the RTK Query cache slice.
// RTK Query mounts its reducer under `apiBase.reducerPath` ('api').
const rootReducer = combineReducers({
  ui: uiReducer,
  [apiBase.reducerPath]: apiBase.reducer,
});

// Wrap the root reducer with redux-persist. Only whitelisted slices are
// persisted to localStorage; the RTK Query cache ("api") is intentionally
// excluded (it is refetched on focus/reconnect instead).
const persistedReducer = persistReducer(
  createRootPersistConfig(['ui']),
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // redux-persist dispatches these internally; they are not serializable.
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiBase.middleware),
});

// Enables RTK Query's refetchOnFocus / refetchOnReconnect behaviour.
setupListeners(store.dispatch);

export const persistor = persistStore(store);

// Typed helpers used throughout the app (see src/app/hooks.ts).
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
