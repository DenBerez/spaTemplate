import { createTheme } from '@mui/material/styles';
import { createCustomTheme } from './themeFoundation';

export const warmOrange = (mode = 'light') => createTheme(createCustomTheme({
  mode,
  primary: {
    main: '#f97316',
    light: mode === 'dark' ? '#fb923c' : '#fdba74',
    dark: mode === 'dark' ? '#ea580c' : '#c2410c',
  },
  secondary: {
    main: '#0ea5e9',
    light: mode === 'dark' ? '#38bdf8' : '#7dd3fc',
    dark: mode === 'dark' ? '#0284c7' : '#0369a1',
  },
  background: {
    default: '#fff7ed',
    paper: '#ffffff',
  },
  fontFamily: '"DM Sans", "Helvetica", sans-serif',
  letterSpacing: '-0.03em',
  buttonRadius: 8,
})); 