// Centralized, environment-driven configuration.
// All public env vars must be prefixed with VITE_ (Vite exposes only these
// to client code). This keeps the core configurable per consuming system.
export const APP_NAME = import.meta.env.VITE_APP_NAME ?? 'React SPA Core';
export const APP_PORT = Number(import.meta.env.VITE_PORT) || 5173;

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000';
export const API_PROXY_PATH = import.meta.env.VITE_API_PROXY_PATH ?? '/api';

// RTK Query caching: how long (seconds) fetched data is retained in memory
// after the last subscriber unmounts (baseApi keepUnusedDataFor).
export const API_CACHE_TTL_SECONDS =
  Number(import.meta.env.VITE_API_CACHE_TTL_SECONDS) || 60;

export const isDev = import.meta.env.DEV;
export const isProd = import.meta.env.PROD;
