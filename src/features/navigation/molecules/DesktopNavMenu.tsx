import { Box } from '@mui/material';
import { NavLink, navItems } from '../atoms/NavLink';

// Horizontal navigation links shown on tablet/desktop only.
export const DesktopNavMenu = () => (
  <Box
    sx={{
      display: { xs: 'none', md: 'flex' },
      alignItems: 'center',
      gap: 1,
    }}
  >
    {navItems.map((item) => (
      <NavLink key={item.href} item={item} />
    ))}
  </Box>
);
