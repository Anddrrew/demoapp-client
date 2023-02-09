import { Navigate } from 'react-router-dom';
import { appPaths } from '../router/paths';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

export default function NotFound() {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    enqueueSnackbar('Page not found, you redirected to home', { variant: 'info' });
  }, []);

  return <Navigate to={appPaths.INDEX} />;
}
