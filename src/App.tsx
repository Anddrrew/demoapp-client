import './App.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AppRouter from './router';
import { SnackbarProvider } from 'notistack';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={5}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <AppRouter />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
