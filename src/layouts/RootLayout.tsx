import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

// Shared layout: top app bar, navigation, and an outlet for child routes.
export const RootLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            React SPA Core
          </Typography>
          <Button color="inherit" onClick={() => navigate('/')}>
            Home
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ py: 3 }}>
        <Outlet />
      </Container>
    </>
  );
};
