import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Auth0ProviderWithNavigate } from '../providers/Auth0ProviderWithNavigate';
import { Home, NotFound, Profile } from '../pages';
import { Box, CircularProgress } from '@mui/material';
import { appPaths } from './paths';
import { Summarization } from '../pages/services';
import Layout from '../components/Layout';

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
            element: <Layout />,
            children: [
              {
                element: <Home />,
                path: appPaths.INDEX,
              },
              {
                element: <Profile />,
                path: appPaths.PROFILE,
              },
              {
                path: appPaths.SERVICE_SUMMARIZATION,
                element: <Summarization />,
              },
              {
                path: '*',
                element: <NotFound />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router}></RouterProvider>;
}
