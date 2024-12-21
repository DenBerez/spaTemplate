import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, TextField, Button, List, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha } from '@mui/material/styles';
import { useLanguage } from '../contexts/LanguageContext';

export const ContactSection = () => {
  const { t } = useLanguage();
  const theme = useTheme();
  const layout = theme.layout.contact;
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus({ type: 'success', message: 'Message sent successfully!' });
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = (
    <Box sx={{ 
      opacity: 0,
      animation: 'fadeInUp 0.6s ease-out forwards',
    }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
        {t('contact.title')}
      </Typography>
      <Typography variant="body1" sx={{ 
        mb: 4, 
        maxWidth: 500,
        color: theme.palette.mode === 'dark' 
          ? 'rgba(255,255,255,0.7)' 
          : 'text.secondary',
        lineHeight: 1.7
      }}>
        {t('contact.subtitle')}
      </Typography>
      <List>
        {[
          { icon: <EmailIcon />, text: "info@example.com" },
          { icon: <PhoneIcon />, text: "+1 (555) 123-4567" },
          { icon: <LocationOnIcon />, text: "123 Business Ave, Suite 100" },
        ].map((item, index) => (
          <ListItem key={index} sx={{ px: 0, py: 1 }}>
            <ListItemIcon sx={{ color: 'primary.main' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              sx={{
                '& .MuiListItemText-primary': {
                  color: theme.palette.mode === 'dark' 
                    ? 'rgba(255,255,255,0.9)' 
                    : 'text.primary'
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const contactForm = (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        borderRadius: {
          xs: theme.layout.borderRadius.medium.xs,
          sm: theme.layout.borderRadius.medium.sm,
          md: theme.layout.borderRadius.medium.md,
        },
        opacity: 0,
        animation: 'fadeInUp 0.6s ease-out 0.3s forwards',
        backgroundColor: theme.palette.mode === 'dark' 
          ? alpha(theme.palette.background.paper, 0.8)
          : theme.palette.background.paper,
        backdropFilter: 'blur(8px)',
        ...(layout.boxed && {
          boxShadow: theme.palette.mode === 'dark'
            ? `0 8px 32px ${alpha(theme.palette.common.black, 0.3)}`
            : theme.shadows[4],
        }),
      }}
      elevation={0}
    >
      <Stack spacing={3}>
        <TextField
          label={t('contact.name')}
          fullWidth
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: theme.palette.mode === 'dark' 
                ? 'rgba(255,255,255,0.05)' 
                : 'rgba(0,0,0,0.02)'
            }
          }}
        />
        <TextField
          label={t('contact.email')}
          fullWidth
          type="email"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: theme.palette.mode === 'dark' 
                ? 'rgba(255,255,255,0.05)' 
                : 'rgba(0,0,0,0.02)'
            }
          }}
        />
        <TextField
          label={t('contact.message')}
          fullWidth
          multiline
          rows={4}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: theme.palette.mode === 'dark' 
                ? 'rgba(255,255,255,0.05)' 
                : 'rgba(0,0,0,0.02)'
            }
          }}
        />
        <LoadingButton
          loading={loading}
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          sx={{
            py: 1.5,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: `0 8px 16px ${alpha(theme.palette.primary.main, 0.2)}`,
            }
          }}
        >
          {t('contact.submit')}
        </LoadingButton>
        {status && (
          <Typography 
            color={status.type === 'success' ? 'success.main' : 'error.main'}
            textAlign="center"
          >
            {status.message}
          </Typography>
        )}
      </Stack>
    </Paper>
  );

  return (
    <Box sx={{ 
      py: { xs: layout.spacing.xs, sm: layout.spacing.sm, md: layout.spacing.md },
      px: { xs: 2, sm: 3, md: 4 },
      backgroundColor: theme.palette.mode === 'dark' 
        ? alpha(theme.palette.background.default, 0.9)
        : alpha(theme.palette.background.paper, 0.8),
      backdropFilter: 'blur(8px)',
      position: 'relative',
      overflow: 'hidden',
      '&::before': layout.gradient ? {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(45deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
        zIndex: 0,
      } : {},
    }}>
      <Container maxWidth={layout.maxWidth}>
        <Grid container spacing={layout.spacing}>
          <Grid item xs={12} md={6}>
            {contactInfo}
          </Grid>
          <Grid item xs={12} md={6}>
            {contactForm}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};