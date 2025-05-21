import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import {
  Gavel,
  AccountBalance,
  Business,
  Security,
  Work,
  Home,
  Campaign,
  Assessment,
  School,
} from "@mui/icons-material";

const services = [
  {
    title: "Propiedad Intelectual",
    description:
      "Asesoría general, protección de derechos de autor y derechos conexos, y propiedad industrial.",
    icon: <Gavel fontSize="large" />,
  },
  {
    title: "Civil",
    description:
      "Redacción de contratos, trámites en notarias y registros públicos, asesoría en derecho de familia y sucesiones.",
    icon: <AccountBalance fontSize="large" />,
  },
  {
    title: "Mercantil",
    description:
      "Actas constitutivas, venta de acciones, asesoría en derecho societario y comercial.",
    icon: <Business fontSize="large" />,
  },
  {
    title: "Penal",
    description:
      "Defensa privada, apelaciones, asesoría en derecho penal y procesal penal.",
    icon: <Security fontSize="large" />,
  },
  {
    title: "Laboral",
    description:
      "Inscripción legal, revisión de expedientes, asesoría en derecho laboral y seguridad social.",
    icon: <Work fontSize="large" />,
  },
  {
    title: "Inmobiliaria",
    description:
      "Compra-venta de inmuebles, arrendamientos, asesoría en derecho inmobiliario.",
    icon: <Home fontSize="large" />,
  },
  {
    title: "Marketing",
    description:
      "Creación de branding y contenido para redes sociales, estrategias de marketing legal.",
    icon: <Campaign fontSize="large" />,
  },
  {
    title: "Contable",
    description:
      "Balances empresariales, constancias de ingresos, asesoría contable y fiscal.",
    icon: <Assessment fontSize="large" />,
  },
  {
    title: "Capacitaciones",
    description:
      "Formación especializada en áreas de Propiedad Intelectual, Mercantil, Civil y Laboral.",
    icon: <School fontSize="large" />,
  },
];

const ServiceCard = ({ service, index }) => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    delay: index * 100,
    config: { tension: 280, friction: 60 },
  });

  return (
    <Grid item xs={12} sm={6} md={4} ref={ref}>
      <animated.div style={springProps}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: theme.shadows[8],
            },
          }}
        >
          <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 3 }}>
            <Box
<<<<<<< HEAD
=======
            id="services"
>>>>>>> de4a2cc (inmobiliaria)
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 2,
                color: theme.palette.primary.main,
              }}
            >
              {service.icon}
            </Box>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: theme.palette.primary.main,
              }}
            >
              {service.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.8 }}
            >
              {service.description}
            </Typography>
          </CardContent>
        </Card>
      </animated.div>
    </Grid>
  );
};

const Services = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const headerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { tension: 280, friction: 60 },
  });

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        mt: { xs: 4, md: 6 },
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box ref={ref} sx={{ mb: 8, textAlign: "center" }}>
          <animated.div style={headerSpring}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontWeight: 700,
                color: theme.palette.burgundy[700],
              }}
            >
              Nuestros Servicios
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
            >
              Soluciones legales integrales para todas sus necesidades
            </Typography>
          </animated.div>
        </Box>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
