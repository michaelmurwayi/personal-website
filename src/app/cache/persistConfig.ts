import storage from 'redux-persist/lib/storage';

// Build the redux-persist configuration used by the store.
//
// `whitelist` selects which Redux slices are persisted to localStorage (state
// caching across page reloads). Pass only the slice names you want cached.
// The RTK Query cache ("api") is intentionally NOT persisted — refetched
// instead — because cached API data is transient/in-memory by design.
export const createRootPersistConfig = (whitelist: string[] = ['ui']) => ({
  key: 'root',
  storage,
  whitelist,
});
