// Barrel for API service layers.
//
// Consuming systems add their own service at `src/services/<feature>/<feature>Api.ts`
// by extending the shared base with `apiBase.injectEndpoints(...)`, then re-export its
// hooks/types here. Importing '@/services' (in src/main.tsx) at startup loads each
// service module, which injects its endpoints onto the shared baseApi cache.
//
// export { useXQuery } from './feature/featureApi';
// export type { X } from './feature/featureApi';
