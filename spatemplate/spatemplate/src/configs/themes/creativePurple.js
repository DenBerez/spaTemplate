import { createTheme } from '@mui/material/styles';
import { createCustomTheme } from './themeFoundation';

export const creativePurple = (mode = 'light') => createTheme(createCustomTheme({
  mode,
  primary: {
    main: '#7c3aed',
    light: mode === 'dark' ? '#a78bfa' : '#c4b5fd',
    dark: mode === 'dark' ? '#6d28d9' : '#5b21b6',
  },
  secondary: {
    main: '#ec4899',
    light: mode === 'dark' ? '#f472b6' : '#f9a8d4',
    dark: mode === 'dark' ? '#db2777' : '#be185d',
  },
  background: {
    default: '#faf5ff',
    paper: '#ffffff',
  },
  fontFamily: '"Poppins", "Helvetica", sans-serif',
  letterSpacing: '-0.02em',
  buttonRadius: 16,
})); 