import { Container } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import ApiService from '../../service/ApiService';
import ResponsiveAppBar from './AppBar';

export default function Layout() {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    getAccessTokenSilently().then(ApiService.setAccessToken);
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ marginY: 2 }}>
        <Outlet />
      </Container>
    </>
  );
}
