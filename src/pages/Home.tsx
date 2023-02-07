import { appPaths } from '../router/paths';
import { Typography } from '@mui/material';
import AppLink from '../components/Link';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState('');

  useEffect(() => {
    getAccessTokenSilently().then((res) => setToken(String(res)));
  }, []);

  return (
    <>
      <Typography>Home</Typography>
      <AppLink to={appPaths.PROFILE}>Go to profile</AppLink>
      <div>
        <code style={{ wordWrap: 'break-word' }}>{token}</code>
      </div>
    </>
  );
}
