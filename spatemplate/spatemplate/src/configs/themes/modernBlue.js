import { createTheme } from '@mui/material/styles';
import { createCustomTheme } from './themeFoundation';

export const modernBlue = (mode = 'light') => createTheme(createCustomTheme({
  mode,
  primary: {
    main: '#2563eb',
    light: mode === 'dark' ? '#3b82f6' : '#60a5fa',
    dark: mode === 'dark' ? '#1d4ed8' : '#1e40af',
  },
  secondary: {
    main: '#db2777',
    light: mode === 'dark' ? '#ec4899' : '#f472b6',
    dark: mode === 'dark' ? '#be185d' : '#9d174d',
  },
  background: {
    default: '#f8fafc',
    paper: '#ffffff',
  },
  fontFamily: '"Inter", "Roboto", sans-serif',
  letterSpacing: '-0.01em',
  buttonRadius: 12,
})); 