import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, Apartment, Store, Terrain } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

const inmobiliariaSections = [
  {
    title: "Apartamentos",
    description: "Encuentra apartamentos en venta y alquiler.",
    icon: <Apartment fontSize="large" />,
    route: "/inmobiliaria/apartamentos",
<<<<<<< HEAD
    color: "#1e88e5", // blue
=======
>>>>>>> de4a2cc (inmobiliaria)
  },
  {
    title: "Casas",
    description: "Casas disponibles para todos los gustos y necesidades.",
    icon: <Home fontSize="large" />,
    route: "/inmobiliaria/casas",
<<<<<<< HEAD
    color: "#43a047", // green
=======
>>>>>>> de4a2cc (inmobiliaria)
  },
  {
    title: "Locales",
    description: "Locales comerciales en ubicaciones estratégicas.",
    icon: <Store fontSize="large" />,
    route: "/inmobiliaria/locales",
<<<<<<< HEAD
    color: "#fbc02d", // yellow
=======
>>>>>>> de4a2cc (inmobiliaria)
  },
  {
    title: "Terrenos",
    description: "Terrenos para construir el proyecto de tus sueños.",
    icon: <Terrain fontSize="large" />,
    route: "/inmobiliaria/terrenos",
<<<<<<< HEAD
    color: "#e53935", // red
=======
>>>>>>> de4a2cc (inmobiliaria)
  },
];

const InmobiliariaCard = ({ section, index }) => {
  const theme = useTheme();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const navigate = useNavigate();
  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    delay: index * 100,
    config: { tension: 280, friction: 60 },
  });

  return (
    <Grid item xs={12} sm={6} md={3} ref={ref}>
      <animated.div style={springProps}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
<<<<<<< HEAD
            background: section.color,
            color: "#fff",
=======
            backgroundColor:theme.palette.background.paper,
              color: "#3756a9",
>>>>>>> de4a2cc (inmobiliaria)
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: theme.shadows[8],
              filter: "brightness(0.95)",
            },
          }}
          onClick={() => navigate(section.route)}
        >
          <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              {section.icon}
            </Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              {section.title}
            </Typography>
<<<<<<< HEAD
            <Typography variant="body2" sx={{ color: "#fff", lineHeight: 1.8 }}>
=======
            <Typography variant="body2" sx={{ color: "#3756a9", lineHeight: 1.8 }}>
>>>>>>> de4a2cc (inmobiliaria)
              {section.description}
            </Typography>
          </CardContent>
        </Card>
      </animated.div>
    </Grid>
  );
};

const InmobiliariaCards = () => (
  <Grid container spacing={3} justifyContent="center">
    {inmobiliariaSections.map((section, i) => (
      <InmobiliariaCard section={section} index={i} key={section.title} />
    ))}
  </Grid>
);

export default InmobiliariaCards;
