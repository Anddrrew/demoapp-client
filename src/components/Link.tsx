import { Link } from '@mui/material';
import { LinkProps, Link as RouterLink } from 'react-router-dom';

export default function AppLink({ children, ...rest }: LinkProps) {
  return (
    <Link component={RouterLink} underline='none' {...rest}>
      {children}
    </Link>
  );
}
