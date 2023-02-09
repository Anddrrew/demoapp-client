import { useAuth0 } from '@auth0/auth0-react';
import { Button, Typography } from '@mui/material';
import { appPaths } from '../router/paths';
import AppLink from '../components/Link';

export default function Profile() {
  const { user, logout } = useAuth0();

  return (
    <>
      <Typography>Profile</Typography>
      <AppLink to={appPaths.INDEX}>Go to home</AppLink>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Button onClick={() => logout()}>Log Out</Button>
    </>
  );
}
