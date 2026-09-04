import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

// Build the (light) Material UI theme. Pass a ThemeOptions object to extend/override
// colors etc.; it is deep-merged over the base. Returns a fresh theme so callers
// (ThemeProvider) can memoize it.
export const buildTheme = (customThemeOptions?: ThemeOptions) => {
  const base: ThemeOptions = {
    palette: {
      mode: 'light',
      primary: { main: '#1976d2' },
      secondary: { main: '#6366f1' },
      background: {
        default: '#f4f6f9',
        paper: '#ffffff',
      },
    },
    shape: { borderRadius: 8 },
    components: {
      // Baseline font + body styles applied globally via CssBaseline.
      MuiCssBaseline: {
        styleOverrides:
          '@font-face { font-family: "Inter"; src: local("Inter"); } body { font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }',
      },
    },
  };

  // createTheme(base, overrides) deep-merges the second argument over the base.
  return customThemeOptions ? createTheme(base, customThemeOptions) : createTheme(base);
};
