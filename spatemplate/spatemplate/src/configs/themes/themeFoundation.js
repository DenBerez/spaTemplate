import { alpha } from '@mui/material/styles';

export const createCustomTheme = (options) => ({
  palette: {
    mode: options.mode || 'light',
    primary: options.primary,
    secondary: options.secondary,
    background: {
      default: options.mode === 'dark' ? '#121212' : options.background?.default,
      paper: options.mode === 'dark' ? '#1E1E1E' : options.background?.paper,
    },
    text: {
      primary: options.mode === 'dark' ? '#ffffff' : '#1a1a1a',
      secondary: options.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
    },
  },
  typography: {
    fontFamily: options.fontFamily,
    h3: {
      fontWeight: 700,
      letterSpacing: options.letterSpacing || '-0.02em',
      color: options.mode === 'dark' ? '#ffffff' : '#1a1a1a',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: options.letterSpacing || '-0.02em',
      color: options.mode === 'dark' ? '#ffffff' : '#1a1a1a',
    },
    h6: {
      fontWeight: 600,
      color: options.mode === 'dark' ? '#ffffff' : '#1a1a1a',
    },
    body1: {
      color: options.mode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
    },
    body2: {
      color: options.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: options.mode === 'dark' ? '#1E1E1E' : '#ffffff',
          color: options.mode === 'dark' ? '#ffffff' : '#1a1a1a',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: options.buttonRadius || 8,
          padding: '12px 28px',
          textTransform: 'none',
          fontWeight: 600,
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: `0 4px 12px ${alpha(options.primary.main, 0.2)}`,
          },
          '&.MuiButton-contained': {
            color: options.mode === 'dark' ? '#ffffff' : '#ffffff',
          },
          '&.MuiButton-outlined': {
            borderColor: options.mode === 'dark' ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)',
          },
        },
      },
    },
  },
}); 