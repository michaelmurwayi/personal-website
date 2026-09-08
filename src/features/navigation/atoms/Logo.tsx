import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const LogoLink = styled('a')({
  display: 'inline-flex',
  textDecoration: 'none',
});

// Brand monogram: the initials "MM" styled in grey to match the nav links. 
export const Logo = () => (
  <LogoLink href="#hero" aria-label="MM — Home">
    <Typography
      variant="h5"
      component="span"
      sx={{ fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff' }}
    >
      MM
    </Typography>
  </LogoLink>
);
