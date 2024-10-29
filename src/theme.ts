// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#ff9800', // Orange
    },
    success: {
      main: '#4caf50', // Green
    },
    background: {
      default: '#f0f2f5', // Light background
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h5: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none', // Remove uppercase on buttons
    },
  },
});

export default theme;
