import { Button } from '@mui/material';

export interface NavItem {
  label: string;
  href: string;
}

// Same-page sections the navigation scrolls to.
export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

// Single navigation link. `href` makes this Button render as an anchor so it
// scrolls to an in-page section instead of triggering a route change.
export const NavLink = ({ item }: { item: NavItem }) => (
  <Button
    href={item.href}
    variant="text"
    color="inherit"
    aria-label={item.label}
    sx={(theme) => ({
      fontWeight: 500,
      textTransform: 'none',
      color: '#9ca3af',
      '&:hover': {
        color: theme.palette.success.dark,
        backgroundColor: 'transparent',
      },
    })}
  >
    {item.label}
  </Button>
);
