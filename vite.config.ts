import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import process from 'node:process';

// Vite config is environment-driven so the same core can target different APIs
// per consuming system (override via .env / VITE_* variables).
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // Small helper to read env vars with a fallback. `loadEnv` returns string
  // records; `String()` keeps things robust regardless of the value shape.
  const get = (key: string, fallback: string): string =>
    env[key] !== undefined ? String(env[key]) : fallback;

  const port = Number(get('VITE_PORT', '5173'));
  const apiBaseUrl = get('VITE_API_BASE_URL', 'http://localhost:4000');
  const apiProxyPath = get('VITE_API_PROXY_PATH', '/api');

  return {
    plugins: [react()],
        resolve: {
      // Trailing-slash aliases ('@/', '@core/') intentionally avoid clashing
      // with scoped packages like @mui/* and @emotion/*.
      alias: {
        '@/': `${path.resolve(__dirname, './src')}/`,
        '@core/': `${path.resolve(__dirname, './src/core')}/`,
        '@app/': `${path.resolve(__dirname, './src/app')}/`,
        '@features/': `${path.resolve(__dirname, './src/features')}/`,
        '@common/': `${path.resolve(__dirname, './src/common')}/`,
        '@services/': `${path.resolve(__dirname, './src/services')}/`,
      },
    },
    server: {
      port,
      open: false,
      // Proxy same-origin API requests to the configured backend. This is only
      // used by services that use *relative* URLs; absolute URLs bypass it.
      proxy: {
        [apiProxyPath]: {
          target: apiBaseUrl,
          changeOrigin: true,
          secure: false,
          rewrite: (proxyPath) =>
            proxyPath.replace(new RegExp(`^${apiProxyPath}`), ''),
        },
      },
    },
    build: {
      outDir: 'dist',
      sourcemap: get('VITE_BUILD_SOURCEMAP', 'true') !== 'false',
    },
  };
});
