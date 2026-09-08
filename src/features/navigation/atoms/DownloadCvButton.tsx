import { styled } from '@mui/material/styles';

const GreenAnchor = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  fontWeight: 600,
  textTransform: 'none',
  padding: theme.spacing(1, 2.5),
  borderRadius: 0,
  backgroundColor: theme.palette.success.main,
  color: theme.palette.success.contrastText,
  transition: 'background-color 150ms ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.success.dark,
  },
}));

// Green "Download CV" button. Links to the CV asset served from /public.
export const DownloadCvButton = () => (
  <GreenAnchor href="/media/cv.pdf" download aria-label="Download CV (PDF)">
    Download CV
  </GreenAnchor>
);
