import { useMemo } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { buildTheme } from '@/core/theme/theme';

// Builds the (light) MUI theme once and applies a consistent baseline via
// CssBaseline. Wrapped around the app once in src/main.tsx.
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = useMemo(() => buildTheme(), []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
