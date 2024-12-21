import { createTheme } from '@mui/material/styles';
import { createCustomTheme } from './themeFoundation';

export const natureGreen = (mode = 'light') => createTheme(createCustomTheme({
  mode,
  primary: {
    main: '#059669',
    light: mode === 'dark' ? '#34d399' : '#6ee7b7',
    dark: mode === 'dark' ? '#047857' : '#065f46',
  },
  secondary: {
    main: '#fb923c',
    light: mode === 'dark' ? '#fdba74' : '#fed7aa',
    dark: mode === 'dark' ? '#ea580c' : '#c2410c',
  },
  background: {
    default: '#f1f5f1',
    paper: '#ffffff',
  },
  fontFamily: '"Montserrat", "Helvetica", sans-serif',
  letterSpacing: '0',
  buttonRadius: 24,
})); 