import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import { useLanguage } from '../contexts/LanguageContext';

export const FeatureSection = () => {
  const theme = useTheme();
  const layout = theme.layout.features;
  const { t } = useLanguage();
  
  // Get the number of features from translations
  const featureCount = 4; // Based on your translations structure
  
  const renderFeatureContent = (index) => (
    <Paper 
      sx={{ 
        p: { xs: 3, sm: 4, md: 4 }, 
        height: '100%',
        borderRadius: {
          xs: theme.layout.borderRadius.medium.xs,
          sm: theme.layout.borderRadius.medium.sm,
          md: theme.layout.borderRadius.medium.md,
        },
        textAlign: layout.style === 'grid' ? "center" : "left",
        transition: 'all 0.3s ease-in-out',
        backgroundColor: theme.palette.mode === 'dark' 
          ? alpha(theme.palette.background.paper, 0.8)
          : theme.palette.background.paper,
        backdropFilter: 'blur(8px)',
        opacity: 0,
        animation: `fadeInUp 0.6s ease-out ${index * 0.2}s forwards`,
        transform: 'translateY(0)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
          '& .feature-icon': {
            transform: 'scale(1.1)',
          }
        },
      }} 
      elevation={theme.palette.mode === 'dark' ? 2 : 0}
    >
      <Typography 
        variant="h5" 
        gutterBottom
        sx={{ 
          mb: 2,
          fontWeight: 600,
          fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
          color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
        }}
      >
        {t(`features.title${index + 1}`)}
      </Typography>
      <Typography
        sx={{
          color: theme.palette.mode === 'dark' 
            ? 'rgba(255,255,255,0.7)' 
            : 'text.secondary',
          lineHeight: 1.7,
          fontSize: { xs: '0.875rem', sm: '1rem', md: '1rem' },
        }}
      >
        {t(`features.description${index + 1}`)}
      </Typography>
    </Paper>
  );

  return (
    <Box sx={{ 
      py: layout.spacing,
      px: { xs: 2, sm: 3, md: 4 },
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
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            mb: { xs: 4, sm: 6, md: 8 },
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            opacity: 0,
            animation: 'fadeInUp 0.6s ease-out forwards',
          }}
        >
          {t('features.title')}
        </Typography>
        <Grid container spacing={layout.spacing}>
          {Array.from({ length: featureCount }).map((_, index) => (
            <Grid item {...layout.columns} key={index}>
              {renderFeatureContent(index)}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};