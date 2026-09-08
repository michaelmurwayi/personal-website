import { Box } from '@mui/material';

/**
 * Full-bleed background: an autoplaying, looping video of falling stars over
 * black, dimmed by a translucent overlay so foreground text stays readable and
 * the effect feels subtle. Place the asset at /public/media/header.mp4.
 *
 * Renders inside a `position: relative` parent. Add a matching `zIndex` (>= 2)
 * to siblings that should appear above it.
 */
export const StarsVideo = () => (
  <>
    <Box
      component="video"
      src="/media/header.mp4"
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
      sx={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
      }}
      aria-hidden="true"
    />
  </>
);