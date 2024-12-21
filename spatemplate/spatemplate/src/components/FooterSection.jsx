import { Box, Container, Typography, Link, Grid, Stack, List, ListItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import { useLanguage } from '../contexts/LanguageContext';

export const FooterSection = () => {
  const { t } = useLanguage();
  const theme = useTheme();
  const layout = theme.layout.footer;

  return (
    <Box sx={{/*...existing styles...*/}}>
      <Container maxWidth={layout.maxWidth}>
        <Typography variant="body2" sx={{/*...existing styles...*/}}>
          {t('footer.about')}
        </Typography>
        <Stack direction="row" spacing={3}>
          <Link href="#" sx={{/*...existing styles...*/}}>
            {t('footer.links')}
          </Link>
          <Link href="#" sx={{/*...existing styles...*/}}>
            {t('footer.contact')}
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};