import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const Centered = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 64,
  color: theme.palette.primary.main,
}));

// Reusable spinner, e.g. shown while redux-persist rehydrates state.
export const LoadingSpinner = () => (
  <Centered>
    <CircularProgress thickness={5} size={24} />
  </Centered>
);
