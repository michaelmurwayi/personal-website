# React SPA Core

A reusable React single-page application **core structure** that can be forked
or installed into multiple systems. It provides batteries-included plumbing so
consuming projects only have to add their domain features.

## Stack

| Concern              | Library                                           |
| -------------------- | ------------------------------------------------- |
| Build / Dev server   | [Vite](https://vitejs.dev)                        |
| Language             | TypeScript                                        |
| UI                   | [Material UI v5](https://mui.com)                 |
| State management     | [Redux Toolkit](https://redux-toolkit.js.org)     |
| Caching (data)       | RTK Query (built into Redux Toolkit)              |
| Caching (state)      | [redux-persist](https://github.com/rt2zz/redux-persist) |
| Routing              | React Router v6                                   |
| Auth                 | _Not included_ (by design)                        |

## Getting started

```bash
# install dependencies (npm / yarn / pnpm)
npm install

# dev server
npm run dev

# build
npm run build

# type-check
npm run type-check

# lint / format
npm run lint
npm run format
```

## Project structure

The root entry point is `index.html` (Vite serves it from the project root — a build
will fail if it lives under `public/`). Other static assets such as `favicon.svg`
live in `public/`.

```
src/
├── main.tsx                         # App entry: Provider > PersistGate > ThemeProvider > Router
├── app/                             # App-level setup (reusable)
│   ├── store.ts                     # Redux store + RTK Query + redux-persist wiring
│   ├── hooks.ts                     # Typed useDispatch / useSelector
│   ├── router.tsx                   # React Router v6 data router
│   ├── api/baseApi.ts               # RTK Query base (caching config) — extend with injectEndpoints
│   ├── cache/persistConfig.ts       # redux-persist config (selective localStorage caching)
│   └── styles/index.css
├── core/                            # Reusable infrastructure (fork this, keep env-driven)
│   ├── config/env.ts                # Centralized VITE_* env accessor
│   └── theme/                       # Extensible light-only MUI theme
│       ├── theme.ts
│       └── ThemeProvider.tsx
├── features/                        # Feature slices (e.g. ui/)
│   └── ui/uiSlice.ts
├── services/                        # API service layers (extend baseApi)
│   └── index.ts                     # Barrel: register feature services here
├── common/                          # Reusable helpers/components
│   └── components/LoadingSpinner.tsx
├── layouts/RootLayout.tsx           # AppBar + outlet
└── pages/                           # Home, NotFound
```

Path aliases: `@/`, `@core/`, `@app/`, `@features/`, `@common/`, `@services/`
(defined in `vite.config.ts`; TypeScript equivalent via `paths` in `tsconfig.json`).

## Caching strategy

1. **Data caching — RTK Query.** `src/app/api/baseApi.ts` configures the shared
   caching policy:
   - `keepUnusedDataFor` — how long (s) fetched data lives in memory after the
     last subscriber unmounts (env: `VITE_API_CACHE_TTL_SECONDS`).
   - `refetchOnFocus` / `refetchOnReconnect` — re-validate cached data when the
     tab regains focus or the network reconnects.
   - `providesTags` / `invalidatesTags` — fine-grained cache invalidation.

   Add endpoints by extending the base API with `apiBase.injectEndpoints(...)`
   in `src/services/<feature>/<feature>Api.ts`.

2. **State caching — redux-persist.** Selected slices are persisted to
   `localStorage` so the UI state survives refreshes. The RTK Query cache is
   **intentionally excluded** (it is refetched on focus instead of revived
   stale). Configure which slices persist in
   `src/app/cache/persistConfig.ts`.

## Reusing this core in another system

- Copy/rename this folder, then set the API/brand values in `.env`.
- Add your own `src/services/<feature>/<feature>Api.ts` that calls
  `apiBase.injectEndpoints(...)`, and re-export its hooks/types from
  `src/services/index.ts` (the barrel is imported at startup via `src/main.tsx`,
  so endpoints are auto-registered onto the shared baseApi cache).
- Override the MUI theme in `src/core/theme/theme.ts` (`buildTheme`) by passing
  a `ThemeOptions` override — e.g. your brand palette.
- Add feature slices under `src/features/` and pages under `src/pages/`.
- Adjust routes in `src/app/router.tsx`.
