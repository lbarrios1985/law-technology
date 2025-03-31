import React, { useState, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  IconButton,
  useTheme,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  WhatsApp,
  Phone,
  LocationOn,
  AccessTime,
  Email,
} from '@mui/icons-material';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('t2cDxvkRmfIBVWpii');

const ContactSection = () => {
  const theme = useTheme();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const headerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 },
  });

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.user_name.trim()) {
      newErrors.user_name = 'El nombre es requerido';
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = 'El email es requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.user_email)) {
      newErrors.user_email = 'Email inválido';
    }

    if (formData.user_phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i.test(formData.user_phone)) {
      newErrors.user_phone = 'Teléfono inválido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);

    try {
      const result = await emailjs.send(
        'service_gi90oel',
        'template_ymgjl7l',
        {
          to_name: 'Law Technology',
          user_name: formData.user_name,
          user_email: formData.user_email,
          user_phone: formData.user_phone,
          message: formData.message,
          email: 'consultoriojuridicocm2@gmail.com'
        },
        't2cDxvkRmfIBVWpii' // Public Key
      );

      if (result.text === 'OK') {
        setSnackbar({
          open: true,
          message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.',
          severity: 'success',
        });
        setFormData({
          user_name: '',
          user_email: '',
          user_phone: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSnackbar({
        open: true,
        message: 'Error al enviar el mensaje. Por favor, intenta nuevamente.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/584247015021', '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone />,
      title: 'Teléfono',
      content: '+58 424-701-5021',
      action: () => window.open('tel:+584247015021'),
    },
    {
      icon: <WhatsApp />,
      title: 'WhatsApp',
      content: '+58 424-701-5021',
      action: openWhatsApp,
    },
    {
      icon: <Email />,
      title: 'Email',
      content: 'consultoriojuridicocm2@gmail.com',
      action: () => window.open('mailto:consultoriojuridicocm2@gmail.com'),
    },
    {
      icon: <LocationOn />,
      title: 'Dirección',
      content: 'Av 3 entre calle 26 y 27 CC Peckas, 3er nivel local 22',
      action: () => window.open('https://maps.app.goo.gl/7m7NHXLx6UgAp2PS7', '_blank'),
    },
    {
      icon: <AccessTime />,
      title: 'Horario',
      content: 'Lunes a Viernes: 9:00 AM - 5:00 PM',
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        mt: { xs: 4, md: 6 },
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <Box ref={ref} sx={{ mb: 8, textAlign: 'center' }}>
          <animated.div style={headerSpring}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontWeight: 700,
                color: theme.palette.burgundy[700],
              }}
            >
              Contáctanos
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
            >
              Estamos aquí para ayudarte. ¡Contáctanos hoy mismo!
            </Typography>
          </animated.div>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                Envíanos un mensaje
              </Typography>
              <form onSubmit={handleSubmit} style={{ flex: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Nombre"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      error={Boolean(errors.user_name)}
                      helperText={errors.user_name}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="user_email"
                      type="email"
                      value={formData.user_email}
                      onChange={handleChange}
                      error={Boolean(errors.user_email)}
                      helperText={errors.user_email}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Teléfono"
                      name="user_phone"
                      value={formData.user_phone}
                      onChange={handleChange}
                      error={Boolean(errors.user_phone)}
                      helperText={errors.user_phone}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Mensaje"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      error={Boolean(errors.message)}
                      helperText={errors.message}
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={loading}
                      sx={{
                        mt: 2,
                        position: 'relative',
                        backgroundColor: theme.palette.primary.main,
                        '&:hover': {
                          backgroundColor: theme.palette.primary.dark,
                        },
                      }}
                    >
                      Enviar Mensaje
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                height: '100%',
                backgroundColor: theme.palette.background.default,
              }}
            >
              <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
                Información de Contacto
              </Typography>
              <Grid container spacing={3}>
                {contactInfo.map((info, index) => (
                  <Grid item xs={12} key={index}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: info.action ? 'pointer' : 'default',
                        '&:hover': info.action
                          ? {
                              color: theme.palette.primary.main,
                              '& .MuiSvgIcon-root': {
                                color: theme.palette.primary.main,
                              },
                            }
                          : {},
                      }}
                      onClick={info.action}
                    >
                      <IconButton
                        sx={{
                          mr: 2,
                          backgroundColor: 'rgba(26, 35, 126, 0.08)',
                          color: theme.palette.primary.main,
                        }}
                      >
                        {info.icon}
                      </IconButton>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {info.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {info.content}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
