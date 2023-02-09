import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AppLink from '../Link';
import { appPaths } from '../../router/paths';
import { useAuth0 } from '@auth0/auth0-react';
import { MouseEvent, useState } from 'react';
import { Logout, Person } from '@mui/icons-material';
import { Stack } from '@mui/material';

function ResponsiveAppBar() {
  const { user, logout } = useAuth0();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'flex' }, mr: 1 }} />
          <AppLink to={appPaths.INDEX}>
            <Typography
              variant='h5'
              noWrap
              component='a'
              sx={{
                mr: 2,
                display: { xs: 'flex' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              DEMOAPP
            </Typography>
          </AppLink>

          <Box sx={{ flexGrow: 0, marginLeft: 'auto' }}>
            <Tooltip title='Settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={user?.picture} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <AppLink to={appPaths.PROFILE}>
                  <Stack direction={'row'} spacing={1}>
                    <Person color='action' />
                    <Typography color='MenuText'>Profile</Typography>
                  </Stack>
                </AppLink>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseUserMenu();
                  logout();
                }}
              >
                <Stack direction={'row'} spacing={1}>
                  <Logout color='error' />
                  <Typography color='error'>Log out</Typography>
                </Stack>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
