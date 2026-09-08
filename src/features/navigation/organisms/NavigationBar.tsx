import { AppBar, Box, Toolbar, useScrollTrigger } from '@mui/material';
import { useLayoutEffect, useState } from 'react';
import { Logo } from '../atoms/Logo';
import { DownloadCvButton } from '../atoms/DownloadCvButton';
import { DesktopNavMenu } from '../molecules/DesktopNavMenu';
import { MobileNavMenu } from '../molecules/MobileNavMenu';

/**
 * Tracks the viewport height so it can be used as the scroll threshold. The bar
 * stays transparent while the hero/header is visible and only turns solid white
 * once the visitor has scrolled past it (i.e. past a full viewport).
 */
const useViewportHeight = () => {
  const [height, setHeight] = useState(() =>
    typeof window !== 'undefined' ? window.innerHeight : 0,
  );
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    const update = () => setHeight(window.innerHeight);
    update();
    const mediaQuery = window.matchMedia('(orientation: landscape)');
    window.addEventListener('resize', update);
    mediaQuery.addEventListener('change', update);
    return () => {
      window.removeEventListener('resize', update);
      mediaQuery.removeEventListener('change', update);
    };
  }, []);
  return height;
};

// Matches the page container's max-width and horizontal padding so the nav
// links line up with the section content as it scrolls.
const NAV_MAX_WIDTH = 1200;
const NAV_PADDING_X = { xs: 2, sm: 3 };

export const NavigationBar = () => {
  const heroHeightPx = useViewportHeight();
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: heroHeightPx || 80,
  });

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={scrolled ? 2 : 0}
      sx={{
        // Transparent over the hero (fade from a fully-transparent dark slice),
        // then a solid near-black bar on scroll so the white brand + links stay
        // readable over the lighter sections below the hero.
        backgroundColor: scrolled ? '#0a0a0d' : 'rgba(255, 255, 255, 0)',
        color: '#ffffff',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
        transition:
          'background-color 225ms ease-in-out, box-shadow 225ms ease-in-out, border-color 225ms ease-in-out, color 225ms ease-in-out',
      }}
    >
      <Toolbar
        sx={{ maxWidth: NAV_MAX_WIDTH, mx: 'auto', width: '100%', px: NAV_PADDING_X, py: 0 }}
      >
        <Logo />

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          <DesktopNavMenu />
        </Box>

        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, ml: 'auto' }}>
          <DownloadCvButton />
          <MobileNavMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
