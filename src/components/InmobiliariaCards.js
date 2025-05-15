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
    color: "#1e88e5", // blue
  },
  {
    title: "Casas",
    description: "Casas disponibles para todos los gustos y necesidades.",
    icon: <Home fontSize="large" />,
    route: "/inmobiliaria/casas",
    color: "#43a047", // green
  },
  {
    title: "Locales",
    description: "Locales comerciales en ubicaciones estratégicas.",
    icon: <Store fontSize="large" />,
    route: "/inmobiliaria/locales",
    color: "#fbc02d", // yellow
  },
  {
    title: "Terrenos",
    description: "Terrenos para construir el proyecto de tus sueños.",
    icon: <Terrain fontSize="large" />,
    route: "/inmobiliaria/terrenos",
    color: "#e53935", // red
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
            background: section.color,
            color: "#fff",
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
            <Typography variant="body2" sx={{ color: "#fff", lineHeight: 1.8 }}>
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
