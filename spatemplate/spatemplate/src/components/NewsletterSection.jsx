import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Snackbar, Alert, Paper  } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import { useLanguage } from '../contexts/LanguageContext';

export const NewsletterSection = () => {
  const theme = useTheme();
  const { t } = useLanguage();
  const layout = theme.layout.newsletter;
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus({ type: 'success', message: 'Successfully subscribed!' });
      setEmail('');
    } catch (error) {
      setStatus({ type: 'error', message: 'Subscription failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const newsletterContent = (
    <>
      <Typography 
        variant="h3" 
        align="center" 
        gutterBottom
        sx={{ 
          fontWeight: 700,
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          mb: { xs: 3, sm: 4 },
          opacity: 0,
          animation: 'fadeInUp 0.6s ease-out forwards',
        }}
      >
        {t('newsletter.title')}
      </Typography>
      <Typography 
        variant="body1" 
        align="center" 
        sx={{ 
          mb: { xs: 4, sm: 5, md: 6 },
          maxWidth: 600,
          mx: 'auto',
          opacity: 0,
          animation: 'fadeInUp 0.6s ease-out 0.2s forwards',
          color: theme.palette.mode === 'dark' 
            ? 'rgba(255,255,255,0.7)' 
            : 'text.secondary',
          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
          lineHeight: 1.7,
        }}
      >
        {t('newsletter.subtitle')}
      </Typography>
      <Box 
        component="form" 
        onSubmit={handleSubmit}
        sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', sm: layout.style === 'vertical' ? 'column' : 'row' },
          gap: { xs: 2, sm: 2.5 },
          maxWidth: layout.style === 'vertical' ? 400 : 600,
          mx: 'auto',
          opacity: 0,
          animation: 'fadeInUp 0.6s ease-out 0.4s forwards',
        }}
      >
        <TextField
          fullWidth
          placeholder={t('newsletter.email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              height: { xs: 48, sm: 56 },
              backgroundColor: theme.palette.mode === 'dark' 
                ? alpha(theme.palette.background.paper, 0.1)
                : alpha(theme.palette.background.paper, 0.8),
              backdropFilter: 'blur(8px)',
            }
          }}
        />
        <LoadingButton
          loading={loading}
          type="submit"
          variant="contained"
          size="large"
          sx={{
            height: { xs: 48, sm: 56 },
            px: { xs: 3, sm: 6 },
            minWidth: layout.style === 'vertical' ? '100%' : 160,
            fontSize: { xs: '0.9rem', sm: '1rem' },
            fontWeight: 600,
          }}
        >
          {t('newsletter.submit')}
        </LoadingButton>
      </Box>
    </>
  );

  return (
    <Box sx={{ 
      py: { xs: 8, sm: 10, md: 12 },
      px: { xs: 2, sm: 3, md: 4 },
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: theme.palette.mode === 'dark'
        ? alpha(theme.palette.background.default, 0.8)
        : alpha(theme.palette.background.paper, 0.8),
      backdropFilter: 'blur(8px)',
      ...(layout.gradient && {
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(45deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
          zIndex: 0,
        }
      }),
    }}>
      <Container 
        maxWidth={layout.maxWidth}
        sx={{ 
          position: 'relative',
          zIndex: 1,
          py: { xs: 4, sm: 5, md: 6 }
        }}
      >
        {layout.style === 'card' ? (
          <Paper
            elevation={theme.palette.mode === 'dark' ? 4 : 1}
            sx={{
              p: { xs: 4, sm: 5, md: 6 },
              borderRadius: theme.layout.borderRadius.large,
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(8px)',
              background: layout.gradient
                ? `linear-gradient(45deg, ${alpha(theme.palette.primary.dark, 0.95)} 0%, ${alpha(theme.palette.primary.main, 0.95)} 100%)`
                : theme.palette.background.paper,
              color: layout.gradient ? 'white' : 'inherit',
            }}
          >
            {newsletterContent}
          </Paper>
        ) : (
          newsletterContent
        )}
      </Container>
    </Box>
  );
}; 