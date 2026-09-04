import { Box, Typography } from '@mui/material';

// Landing page.
export const HomePage = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        React SPA Core
      </Typography>
      <Typography variant="body1" paragraph>
        A reusable React single-page application core built with React 18, Redux
        Toolkit + RTK Query (caching), redux-persist, React Router and Material UI.
        No authentication is included by design.
      </Typography>
    </Box>
  );
};
