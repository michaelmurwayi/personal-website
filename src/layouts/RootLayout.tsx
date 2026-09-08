import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { NavigationBar } from '@/features/navigation';
import { Footer } from '@/common/components/Footer';

// Shared layout: the fixed navigation bar, page content, and a site footer.
export const RootLayout = () => {
  return (
    <>
      <NavigationBar />
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};
