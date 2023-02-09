import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import AppLink from '../Link';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import ApiService from '../../service/ApiService';

export default function Layout() {
  const { logout, getAccessTokenSilently } = useAuth0();

  const handleClick = () => logout();

  useEffect(() => {
    getAccessTokenSilently().then(ApiService.setAccessToken);
  }, []);

  return (
    <>
      <AppBar position='sticky'>
        <Toolbar>
          <AppLink to='/' sx={{ flexGrow: 1 }}>
            <Typography color='white' variant='h6'>
              DemoApp
            </Typography>
          </AppLink>
          <Button variant='outlined' color='inherit' disableElevation onClick={handleClick}>
            Log out
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginY: 2 }}>
        <Outlet />
      </Container>
    </>
  );
}
