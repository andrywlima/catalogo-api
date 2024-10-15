import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50', // Verde
    },
    secondary: {
      main: '#ff5722', // Laranja
    },
  },
  typography: {
    h5: {
      fontWeight: 600,
    },
  },
});

export default theme;