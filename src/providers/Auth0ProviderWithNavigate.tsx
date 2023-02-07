import { Auth0Provider, AppState } from '@auth0/auth0-react';
import { Outlet, useNavigate } from 'react-router-dom';
import config from '../config';

export const Auth0ProviderWithNavigate = () => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  const { domain, clientId, redirectUri } = config.auth0;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      <Outlet />
    </Auth0Provider>
  );
};
