// React + Material-UI Landing Page Boilerplate

import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Typography, Button, AppBar, Toolbar, IconButton, Menu, MenuItem, Box, Container } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TranslateIcon from '@mui/icons-material/Translate';
import { HeroSection, FeatureSection, ContactSection, FAQSection, FooterSection, NewsletterSection, ScrollToTop } from "./components";
import { themes } from "./configs/themes";
import { siteConfig } from "./configs/config.jsx";
import { useLanguage } from "./contexts/LanguageContext";
import { layouts } from "./configs/layouts/themeLayouts";

const App = ({ config = siteConfig }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [languageMenu, setLanguageMenu] = useState(null);
  const { currentLanguage, setCurrentLanguage, t } = useLanguage();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Create theme with dark mode support
  const activeTheme = themes[config.theme](isDarkMode ? 'dark' : 'light');
  const activeLayout = layouts[config.layout] || layouts.modern;

  const handleLanguageClick = (event) => {
    setLanguageMenu(event.currentTarget);
  };

  const handleLanguageClose = (lang) => {
    if (typeof lang === 'string') {
      setCurrentLanguage(lang);
    }
    setLanguageMenu(null);
  };

  return (
    <ThemeProvider theme={{ ...activeTheme, layout: activeLayout }}>
      <CssBaseline />
      <AppBar 
        position={activeLayout.appBar.position}
        elevation={activeLayout.appBar.elevation}
        sx={{
          background: activeLayout.appBar.transparent ? 'transparent' : undefined,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
            {t('nav.title')}
          </Typography>
          <IconButton color="inherit" onClick={handleLanguageClick}>
            <TranslateIcon />
          </IconButton>
          <Menu
            anchorEl={languageMenu}
            open={Boolean(languageMenu)}
            onClose={() => handleLanguageClose()}
          >
            <MenuItem onClick={() => handleLanguageClose('en')}>English</MenuItem>
            <MenuItem onClick={() => handleLanguageClose('es')}>Español</MenuItem>
          </Menu>
          <IconButton color="inherit" onClick={toggleDarkMode} sx={{ ml: 1 }}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Button color="inherit">{t('nav.login')}</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ 
        pt: activeLayout.appBar.position === 'fixed' ? 8 : 0,
        '& > *': {
          mb: activeLayout.container.spacing,
        }
      }}>
        <HeroSection />
        <Box sx={{ py: activeLayout.container.spacing }}>
          <FeatureSection />
        </Box>
        <Box sx={{ py: activeLayout.container.spacing }}>
          <ContactSection />
        </Box>
        <Box sx={{ py: activeLayout.container.spacing }}>
          <FAQSection />
        </Box>
        <Box sx={{ py: activeLayout.container.spacing }}>
          <NewsletterSection />
        </Box>
        <ScrollToTop />
      </Box>
        <FooterSection />
    </ThemeProvider>
  );
};

export default App;

