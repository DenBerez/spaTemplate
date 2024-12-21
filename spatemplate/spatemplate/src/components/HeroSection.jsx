import { Box, Container, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import { useLanguage } from '../contexts/LanguageContext';

export const HeroSection = () => {
  const { t } = useLanguage();
  const theme = useTheme();
  const layout = theme.layout.hero;
  
  return (
    <Box
      sx={{
        position: 'relative',
        color: 'white',
        minHeight: layout.minHeight,
        display: 'flex',
        alignItems: 'center',
        background: layout.gradient 
          ? `linear-gradient(45deg, ${alpha(theme.palette.primary.dark, 0.95)} 0%, ${alpha(theme.palette.primary.main, 0.95)} 100%)`
          : theme.palette.primary.main,
        borderRadius: layout.curved ? {
          xs: '0 0 25px 25px',
          sm: '0 0 50px 50px',
          md: '0 0 100px 100px'
        } : 0,
        overflow: 'hidden',
        py: layout.spacing,
        '&::before': layout.floating ? {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 50% 50%, ${alpha(theme.palette.secondary.main, 0.15)} 0%, transparent 50%)`,
          animation: 'float 20s ease-in-out infinite',
          zIndex: 0,
        } : {},
        '&::after': layout.floating ? {
          content: '""',
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '80%',
          height: '80%',
          background: `radial-gradient(circle at 50% 50%, ${alpha(theme.palette.primary.light, 0.1)} 0%, transparent 50%)`,
          animation: 'float 15s ease-in-out infinite reverse',
          zIndex: 0,
        } : {},
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography 
          variant="h2" 
          sx={{
            mb: { xs: 2, sm: 3, md: 3 },
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            fontWeight: 800,
            textAlign: 'center',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
            opacity: 0,
            animation: 'fadeInUp 1s ease-out forwards',
          }}
        >
          {t('hero.title')}
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            mb: { xs: 3, sm: 4, md: 4 },
            opacity: 0.9,
            maxWidth: '800px',
            mx: 'auto',
            textAlign: 'center',
            lineHeight: 1.6,
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            opacity: 0,
            animation: 'fadeInUp 1s ease-out 0.2s forwards',
          }}
        >
          {t('hero.subtitle')}
        </Typography>
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            opacity: 0,
            animation: 'fadeInUp 1s ease-out 0.4s forwards',
          }}
        >
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            sx={{
              px: { xs: 4, sm: 6, md: 8 },
              py: { xs: 1.5, sm: 2, md: 2 },
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              fontWeight: 600,
              borderRadius: theme.shape.borderRadius * 2,
              boxShadow: `0 4px 14px ${alpha(theme.palette.secondary.main, 0.4)}`,
              transition: 'all 0.3s ease-in-out',
              backdropFilter: 'blur(4px)',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: `0 8px 20px ${alpha(theme.palette.secondary.main, 0.6)}`,
              },
            }}
          >
            {t('hero.cta')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
  