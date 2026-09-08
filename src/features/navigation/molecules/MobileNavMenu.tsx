import { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { navItems } from '../atoms/NavLink';

// Hamburger icon that opens a Drawer with the same-page links on mobile.
export const MobileNavMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        color="inherit"
        edge="end"
        aria-label="Open navigation menu"
        onClick={() => setOpen(true)}
        sx={{ display: { md: 'none' }, color: '#9ca3af' }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { backgroundColor: '#ffffff', color: '#111827' } }}
      >
        <List sx={{ width: 260 }} onClick={() => setOpen(false)}>
          {navItems.map((item) => (
            <ListItem key={item.href} disablePadding>
              <ListItemButton component="a" href={item.href} sx={{ mx: 1.5, borderRadius: 1 }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
