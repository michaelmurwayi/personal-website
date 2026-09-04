import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Shown for unmatched routes (also used as the router errorElement).
export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Box textAlign="center" marginTop={4}>
      <Typography variant="h4" gutterBottom>
        404 - Page not found
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        The page you are looking for does not exist.
      </Typography>
      <Button onClick={() => navigate('/')} variant="contained">
        Go home
      </Button>
    </Box>
  );
};
