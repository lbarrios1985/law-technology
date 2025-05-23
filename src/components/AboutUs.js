import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  useTheme,
} from "@mui/material";
import { Balance, Gavel, Visibility } from "@mui/icons-material";

const sections = [
  {
    id: "about",
    title: "Quiénes Somos",
    content:
      "En Law Technology, somos un equipo de abogados especializados en ofrecer soluciones legales efectivas. Desde 2023, brindamos asesoría de calidad en diversas áreas del derecho, como propiedad intelectual, civil, mercantil, penal y laboral, además de servicios complementarios como marketing marcario e inmobiliario.",
    icon: <Gavel fontSize="large" />,
  },
  {
    id: "mission",
    title: "Misión",
    content:
      "Nuestro propósito es ofrecer asesoría legal integral y personalizada, enfocada en proteger los derechos y necesidades de nuestros clientes. Nos esforzamos por ser aliados estratégicos, proporcionando soluciones prácticas y seguras.",
    icon: <Balance fontSize="large" />,
  },
  {
    id: "vision",
    title: "Visión",
    content:
      "Aspiramos a ser el consultorio jurídico de referencia, reconocido por nuestra ética, profesionalismo y la confianza de nuestros clientes, apoyando su éxito a través de un enfoque legal innovador y eficiente.",
    icon: <Visibility fontSize="large" />,
  },
];

function Section({ id, title, content, icon, index }) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    delay: index * 200,
    config: { tension: 280, friction: 60 },
  });

  const theme = useTheme();

  return (
    <Grid item xs={12} md={4} ref={ref}>
      <animated.div style={springProps}>
        <Card
          id={id}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: 4,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: theme.shadows[8],
            },
          }}
        >
          <Box
          id="about"
          >
            {icon}
            <Typography
              variant="h5"
              component="h2"
              sx={{
                ml: 1,
                fontWeight: 600,
                color: theme.palette.burgundy[700],
              }}
            >
              {title}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              flex: 1,
              lineHeight: 1.8,
            }}
          >
            {content}
          </Typography>
        </Card>
      </animated.div>
    </Grid>
  );
}

const AboutUs = () => {
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
      sx={{
        py: { xs: 8, md: 12 },
        mt: { xs: 4, md: 6 },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Box ref={ref} sx={{ mb: 8 }}>
          <animated.div style={headerSpring}>
            <Typography
              variant="h1"
              component="h1"
              align="center"
              sx={{
                mb: 2,
                fontWeight: 700,
                color: theme.palette.burgundy[700],
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              Bienvenido a Law Technology
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              align="center"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: theme.palette.burgundy[500],
                fontSize: { xs: "1.75rem", md: "2.25rem" },
              }}
            >
              Soluciones legales innovadoras para el mundo moderno
            </Typography>
          </animated.div>
        </Box>
        <Grid container spacing={4}>
          {sections.map((section, index) => (
            <Section key={section.id} {...section} index={index} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
