import { appPaths } from '../router/paths';
import { Typography } from '@mui/material';
import AppLink from '../components/Link';

export default function Home() {
  return (
    <>
      <Typography>Home</Typography>
      <AppLink to={appPaths.PROFILE}>Go to profile</AppLink>
    </>
  );
}
