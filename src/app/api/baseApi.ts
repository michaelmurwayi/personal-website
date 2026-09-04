import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL, API_CACHE_TTL_SECONDS } from '@/core/config/env';

// Shared RTK Query base API. It only configures the caching policy and a
// default base URL. Feature endpoints are added in consuming systems via
// `apiBase.injectEndpoints(...)` in src/services/<feature>/<feature>Api.ts.
export const apiBase = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ['Example', 'User'],
  // ---- Caching configuration ----
  // keepUnusedDataFor: how long (seconds) cached data is retained in memory
  // after the last component using it unmounts (default 60s).
  keepUnusedDataFor: API_CACHE_TTL_SECONDS,
  // Re-validate potentially-stale cache when the window regains focus or the
  // network reconnects, keeping consuming UIs fresh without manual refetching.
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});

// `apiBase.middleware` must be added to the store (see src/app/store.ts) and
// `apiBase.reducer` is mounted at `apiBase.reducerPath` ('api').
