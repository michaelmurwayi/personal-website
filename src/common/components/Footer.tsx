import { Box, Typography } from '@mui/material';

// Site-wide footer on a black background with a one-line lockup: copyright on
// the left, location/role on the right. Uses the same near-black as the hero.
export const Footer = () => (
  <Box component="footer" sx={{ backgroundColor: '#0a0a0d', color: '#9ca3af' }}>
    <Box
      sx={{
        maxWidth: 1200,
        mx: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: { xs: 2, sm: 3 },
        py: { xs: 2.5, sm: 3 },
        flexWrap: 'wrap',
      }}
    >
      <Typography variant="body2" component="span" sx={{ color: '#9ca3af' }}>
        © 2026 Michael Murwayi
      </Typography>
      <Typography variant="body2" component="span" sx={{ color: '#9ca3af' }}>
        Software Engineer, Nairobi, Kenya
      </Typography>
    </Box>
  </Box>
);