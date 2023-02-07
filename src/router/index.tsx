import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Auth0ProviderWithNavigate } from '../providers/Auth0ProviderWithNavigate';
import { Home, Profile } from '../pages';
import { Box, CircularProgress } from '@mui/material';

const AuthGuard = withAuthenticationRequired(() => <Outlet />, {
  onRedirecting: () => (
    <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
      <CircularProgress size={60} />,
    </Box>
  ),
});

const router = createBrowserRouter([
  {
    element: <Auth0ProviderWithNavigate />,
    children: [
      {
        element: <AuthGuard />,
        children: [
          {
            element: <Home />,
            path: '/',
          },
          {
            element: <Profile />,
            path: '/profile',
          },
        ],
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router}></RouterProvider>;
}
