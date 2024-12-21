import { Container, Typography, List, ListItem, ListItemText, Grid, Paper, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { alpha } from '@mui/material/styles';
import { useLanguage } from '../contexts/LanguageContext';

export const FAQSection = () => {
  const theme = useTheme();
  const { t } = useLanguage();
  const layout = theme.layout.faq;
  
  // Get the number of FAQ items from translations
  const faqCount = 4; // Or determine dynamically from translations structure
  
  const renderFAQContent = (index) => {
    const delay = index * 0.2;
    return (
      <Paper
        sx={{
          p: { xs: 3, sm: 4, md: 5 },
          height: '100%',
          borderRadius: theme.layout.borderRadius.medium,
          backgroundColor: theme.palette.mode === 'dark' 
            ? alpha(theme.palette.background.paper, 0.8)
            : theme.palette.background.paper,
          opacity: 0,
          animation: `fadeInUp 0.6s ease-out ${delay}s forwards`,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: `0 8px 16px ${alpha(theme.palette.primary.main, 0.1)}`,
          },
        }}
        elevation={theme.palette.mode === 'dark' ? 2 : 0}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600,
            color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
            mb: 2.5
          }}
        >
          {t(`faq.question${index + 1}`)}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: theme.palette.mode === 'dark' 
              ? 'rgba(255,255,255,0.7)' 
              : 'text.secondary',
            lineHeight: 1.7,
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          {t(`faq.answer${index + 1}`)}
        </Typography>
      </Paper>
    );
  };

  return (
    <Box sx={{ 
      py: { xs: 6, sm: 8, md: 10 },
      px: { xs: 2, sm: 3, md: 4 },
      backgroundColor: theme.palette.mode === 'dark'
        ? alpha(theme.palette.background.default, 0.5)
        : alpha(theme.palette.background.paper, 0.5),
    }}>
      <Container maxWidth={layout.maxWidth}>
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            mb: { xs: 5, sm: 6, md: 8 },
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            opacity: 0,
            animation: 'fadeInUp 0.6s ease-out forwards',
          }}
        >
          {t('faq.title')}
        </Typography>
        <Grid 
          container 
          spacing={{ xs: 3, sm: 4, md: 5 }}
          sx={{ 
            maxWidth: '100%',
            mx: 'auto'
          }}
        >
          {Array.from({ length: faqCount }).map((_, index) => (
            <Grid item {...layout.columns} key={index}>
              {renderFAQContent(index)}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};