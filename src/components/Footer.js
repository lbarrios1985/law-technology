import React from 'react';
import { Box, Container, Grid, Typography, IconButton, useTheme, Link } from '@mui/material';
import { Instagram, Email } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <Instagram />, 
      url: 'https://www.instagram.com/consultoriojuridico_cm',
      label: 'Instagram'
    },
    { 
      icon: <Email />, 
      url: `mailto:consultoriojuridicocm2@gmail.com`,
      label: 'Email'
    },
  ];

  const footerLinks = [
    { text: 'Quiénes Somos', href: '#about' },
    { text: 'Servicios', href: '#services' },
    { text: 'Equipo', href: '#team' },
    { text: 'Contacto', href: '#contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 0 },
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        width: '100%',
        position: 'relative',
        bottom: 0,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={4} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' }
          }}>
            <Box sx={{ mb: 3 }}>
              <img
                src="/Law-Technology.png"
                alt="Law Technology Logo"
                style={{ 
                  height: '50px', 
                  filter: 'brightness(0) invert(1)',
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ 
              mb: 2, 
              opacity: 0.8,
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: { xs: '80%', sm: '100%' }
            }}>
              Soluciones legales innovadoras para el mundo moderno. Nuestro compromiso es brindar
              servicios legales de alta calidad con un enfoque tecnológico y eficiente.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' }
          }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Enlaces Rápidos
            </Typography>
            <Grid container spacing={1}>
              {footerLinks.map((link) => (
                <Grid item xs={6} key={link.text}>
                  <Link
                    href={link.href}
                    sx={{
                      color: 'white',
                      opacity: 0.8,
                      textDecoration: 'none',

                      '&:hover': {
                        opacity: 1,
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {link.text}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={4} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' }
          }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Síguenos
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 2,
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: { xs: 3, md: 6 },
            pt: { xs: 2, md: 3 },
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            &copy; {currentYear} Law Technology. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
