import { appPaths } from '../router/paths';
import { Navigate } from 'react-router-dom';

export default function Home() {
  return <Navigate to={appPaths.SERVICE_SUMMARIZATION} />;
}
