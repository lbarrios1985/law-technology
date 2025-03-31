import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const SuccessCases = () => {
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
      id="success-cases"
      sx={{
        py: { xs: 8, md: 12 },
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
              Casos de Éxito
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
            >
              Algunos logotipos y marcas que hemos registrado con éxito
            </Typography>
          </animated.div>
        </Box>
        <Grid container spacing={4}>
          {/* Add logo grid items here */}
        </Grid>
      </Container>
    </Box>
  );
};

export default SuccessCases;
