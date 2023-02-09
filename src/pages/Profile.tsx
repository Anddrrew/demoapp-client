import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';

export default function Profile() {
  const { user } = useAuth0();

  return (
    <Grid container justifyContent={'center'}>
      <Grid item>
        <Card variant='outlined'>
          <CardMedia sx={{ padding: 2 }}>
            <Avatar src={user?.picture} sx={{ width: 294, height: 294 }} />
          </CardMedia>
          <CardContent>
            <Stack spacing={1}>
              <Typography variant={'h6'}>{user?.nickname}</Typography>
              <Typography>{user?.email}</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
