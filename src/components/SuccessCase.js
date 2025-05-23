import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { Gavel, Balance, Security } from '@mui/icons-material';
import BrandCarousel from './BrandCarousel';

const successCases = [
  {
    title: 'Protección de Marca Internacional',
    description: 'Aseguramos con éxito el registro de marca en múltiples jurisdicciones para una empresa tecnológica en expansión.',
    icon: <Gavel fontSize="large" />,
    stats: '100+ marcas registradas',
  },
  {
    title: 'Resolución de Disputa Comercial',
    description: 'Mediamos exitosamente en una compleja disputa comercial, logrando un acuerdo beneficioso para todas las partes.',
    icon: <Balance fontSize="large" />,
    stats: '95% de casos resueltos',
  },
  {
    title: 'Cumplimiento Normativo',
    description: 'Implementamos un programa integral de cumplimiento legal para una empresa líder en fintech.',
    icon: <Security fontSize="large" />,
    stats: '100% conformidad legal',
  },
];

const SuccessCase = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const headerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 },
  });

  return (
    <Box
      id="success"
      sx={{
        py: { xs: 8, md: 12 },
        mt: { xs: 4, md: 6 },
        backgroundColor: theme.palette.background.default,
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
              Casos de Éxito
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
            >
              Nuestra experiencia habla por sí misma
            </Typography>
          </animated.div>
        </Box>

        <Grid container spacing={4}>
          {successCases.map((caseItem, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'visible',
                }}
              >
                <CardContent sx={{ p: 4, flex: 1 }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -28,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: theme.palette.burgundy[700],
                      borderRadius: '50%',
                      width: 56,
                      height: 56,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      boxShadow: '0 4px 8px rgba(44, 62, 140, 0.2)',
                    }}
                  >
                    {caseItem.icon}
                  </Box>
                  <Box sx={{ pt: 3, textAlign: 'center' }}>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {caseItem.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      {caseItem.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.secondary.main,
                        fontWeight: 600,
                      }}
                    >
                      {caseItem.stats}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 8 }}>
          <BrandCarousel />
        </Box>
      </Container>
    </Box>
  );
};

export default SuccessCase;
