import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Typography, Container } from "@mui/material";

const InmobiliariaLocales = () => (
  <Container style={{ padding: "2rem 0" }}>
    <Typography variant="h4" gutterBottom>
      Locales
    </Typography>
    <Typography variant="body1">
      Aquí encontrarás información sobre locales disponibles.
    </Typography>
  </Container>
);
=======
import { 
=======
import {
>>>>>>> 2474f22 (Locales)
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
} from "@mui/material";

import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";


const localistings = [
  {
    id: "local-1",
    title: "",
    image: "",
    description: "",
    location: "",
    price: "$",
  },
  {
    id: "local-2",
    title: "",
    image: "",
    description: "",
    location: "",
    price: "$",
  },
];

const LocalCard = ({ local, index }) => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const navigate = useNavigate();

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    delay: index * 150,
    config: { tension: 280, friction: 60 },
  });

  const handleSeeDetails = (localId) => {
    navigate(`/inmobiliaria/locales/${localId}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} ref={ref}>
      <animated.div style={springProps}>
     <Card
         sx={{
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s ease-in-out",
          overflow: "hidden",
          borderRadius: theme.shape.borderRadius * 2,
          boxShadow: theme.shadows[1],
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: theme.shadows[4],
          },
          width: "100%",
          maxWidth: 450,
          mx: "auto",
          minHeight: { xs: "auto", md: "480px" },
          backgroundColor: theme.palette.background.paper,
        }}
         >
            <Box
            sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: "100%",
                  height: 280,
                  display: "block",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.03)",
                    filter: "blur(2px)",
                  },
                }}
                image={local.image} 
                alt={local.title}  
                />
             <Typography
              variant="body1"
              sx={{
              position: 'absolute',
              bottom: 12,
              left: 12,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              fontWeight: 600,
              fontSize: '0.9rem',
              }}
              >
              {local.price}
            </Typography>
          </Box>
          <CardContent
            sx={{
            flex: 1,
            p: { xs: 2, md: 3 },
            display: "flex",
            flexDirection: "column",
             justifyContent: "space-between",
            }}
          >
            <Box>
            <Typography
              variant="h6"
              component="h3"
              sx={{
              fontWeight: 700,
              color:"#242649",
              mb: 0.5,
              lineHeight: 1.3,
              }}
              >
                {local.title}
              </Typography>
            <Typography
            variant="body2"
            sx={{
            mb: 1,
            color: "#242649",
            fontWeight: 500,
            }}
            >
                {local.location}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="#242649"
              sx={{
                lineHeight: 1.5,
                mb: 2,
                flexGrow: 1,
              }}
            >
              {local.description}
            </Typography>
            <Button
              color="primary"
              onClick={() => handleSeeDetails(local.id)}
              sx={{
                mt: "auto",
                width: "100%",
                borderRadius: 2,
                fontWeight: 600,
                color: "#3756a9",
                border: "2px solid #3756a9",
                "&:hover": {
                  backgroundColor: "#3756a9",
                  borderColor: "#2e4a8f",
                  color: "#fff",
                },
              }}
            >
              Ver Propiedad
            </Button>
          </CardContent>
        </Card>
      </animated.div>
    </Grid>
  );
};

const InmobiliariaLocales = () => {
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
      id="Locales"
      sx={{
        py: { xs: 8, md: 10 },
        mt: { xs: 4, md: 6 },
        backgroundColor: theme.palette.grey[50],
      }}
    >
      <Container maxWidth="lg">
        <Box ref={ref} sx={{ mb: { xs: 6, md: 8 }, textAlign: "center" }}>
          <animated.div style={headerSpring}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                mb: 1.5,
                fontWeight: 700,
                color: theme.palette.text.primary,
              }}
            >
              Propiedades Destacadas
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: "700px", mx: "auto", lineHeight: 1.6 }}
            >
              Descubre nuestra exclusiva selección de locales disponibles, diseñados para ofrecer el máximo confort y estilo de vida.
            </Typography>
          </animated.div>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {localistings.map((local, index) => (
            <LocalCard key={local.id} local={local} index={index} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

<<<<<<< HEAD



// const InmobiliariaLocales = () => (
//   <Container style={{ padding: "2rem 0" }}>
//     <Typography variant="h4" gutterBottom>
//       Locales
//     </Typography>
//     <Typography variant="body1">
//       Aquí encontrarás información sobre locales disponibles.
//     </Typography>
//   </Container>
// );
>>>>>>> de4a2cc (inmobiliaria)

=======
>>>>>>> 2474f22 (Locales)
export default InmobiliariaLocales;




