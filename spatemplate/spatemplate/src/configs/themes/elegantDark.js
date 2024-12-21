import { createTheme } from '@mui/material/styles';
import { createCustomTheme } from './themeFoundation';

export const elegantDark = (mode = 'light') => createTheme(createCustomTheme({
  mode,
  primary: {
    main: mode === 'dark' ? '#FFD700' : '#1a1a1a',
    light: mode === 'dark' ? '#FFE44D' : '#2c2c2c',
    dark: mode === 'dark' ? '#CCB100' : '#000000',
  },
  secondary: {
    main: mode === 'dark' ? '#1a1a1a' : '#FFD700',
    light: mode === 'dark' ? '#2c2c2c' : '#FFEB7D',
    dark: mode === 'dark' ? '#000000' : '#B39700',
  },
  background: {
    default: mode === 'dark' ? '#121212' : '#ffffff',
    paper: mode === 'dark' ? '#1E1E1E' : '#f8f8f8',
  },
  fontFamily: '"Playfair Display", "Times New Roman", serif',
  letterSpacing: '0.02em',
  buttonRadius: 0,
})); 