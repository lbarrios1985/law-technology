import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import theme from './theme';
import './styles/styles.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Members from './components/Members';
import Services from './components/Services';
import SuccessCase from './components/SuccessCase';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SEO from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SEO />
        <Header />
        <AboutUs />
        <Members />
        <Services />
        <SuccessCase />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
