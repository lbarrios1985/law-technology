import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  useTheme,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LandscapeIcon from '@mui/icons-material/Landscape';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate, useLocation } from "react-router-dom";

const landListings = [
  // --- TERRENOS EN VENTA ---
  {
    id: "terreno-1",
    title: "Terreno Central",
    image: "/images/inmobiliaria/Cabañas-1.jpg",
    description: "Ideal para desarrollo comercial o residencial en una zona céntrica de Mérida.",
    location: "Mérida, Venezuela",
    price: "$120.000",
    type: "Venta",
    terrainSize: "1500 m²",
  },
 // --- TERRENOS EN ALQUILER ---
  {
    id: "terreno-alquiler-1",
    title: "Parcela en Urbanización Nueva",
    image: "/images/inmobiliaria/Cabañas-1.jpg",
    description: "Excelente ubicación para construir la casa de tus sueños, con servicios en San Juan.",
    location: "San Juan, Venezuela",
    price: "$800/mes",
    type: "Alquiler",
    terrainSize: "2200 m²",
  },

];

const LandCard = ({ land, index }) => {
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

  const handleSeeDetails = (terrenoId) => {
    navigate(`/inmobiliaria/terrenos/${terrenoId}`);
  };

  return (
    <Grid
      item
      xs={12} sm={8} md={6} lg={4}
      ref={ref}
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <animated.div
        style={{
            ...springProps,
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            height: '100%',
            alignItems: "stretch",
            transition: "all 0.3s ease-in-out",
            overflow: "hidden",
            borderRadius: theme.shape.borderRadius * 1,
            boxShadow: theme.shadows[2], 
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: theme.shadows[6],
            },
            width: "100%",
            maxWidth: { xs: '90%', sm: 380, md: 380, lg: 380 },
            mx: "auto",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 200,
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
              image={land.image || '/images/placeholder-land.jpg'}
              alt={land.title}
            />

            <Typography
              variant="body1"
              sx={{
                position: 'absolute',
                bottom: 12,
                right: 12,
                backgroundColor: "#1C3155",
                color: 'white',
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                fontWeight: 600,
                fontSize: '1.3rem',
              }}
            >
              {land.price}
            </Typography>
          </Box>

          <CardContent
            sx={{
              flexGrow: 1,
              p: { xs: 1.5, md: 2 },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: '0.85rem',
                mb: 0.5,
              }}
            >
              Terreno en {land.type.toLowerCase()}
            </Typography>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 700,
                color: theme.palette.text.primary,
                mb: 0.5,
                lineHeight: 1.2,
                fontSize: '1.2rem',
                textAlign: 'center',
              }}
            >
              {land.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1.5,
                color: theme.palette.text.secondary,
                fontSize: '0.9rem',
              }}
            >
              <LocationOnIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
              <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                {land.location}
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
                {land.terrainSize && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, color: theme.palette.text.secondary }}>
                      <LandscapeIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                      <Typography variant="body2" sx={{ fontSize: '1rem' }}>
                          Área: {land.terrainSize}
                      </Typography>
                  </Box>
              )}
            </Box>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                lineHeight: 1.5,
                mb: 2,
                flexGrow: 1,
                fontSize: '0.85rem',
                maxHeight: '4.5em',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {land.description}
            </Typography>

            <Button
              color="primary"
              onClick={() => handleSeeDetails(land.id)}
              sx={{
                mt: "auto",
                width: "100%",
                borderRadius: 2,
                fontWeight: 600,
                color: "#1C3155",
                py: 0.5,
                fontSize: '0.9rem',
                '&:hover': {
                  backgroundColor: "#1C3155",
                  color: "white",
                }
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

const InmobiliariaTerrenos = () => {
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

  const [page, setPage] = useState('1');
  const [filterType, setFilterType] = useState('Venta');
  const itemsPerPage = 6;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const typeParam = params.get('type');
    if (typeParam === 'alquiler') {
      setFilterType('Alquiler');
    } else {
      setFilterType('Venta');
    }
  }, [location.search]);

  const handleChangePage = (event, newPage) => {
    if (newPage !== null) {
      setPage(newPage);
    }
  };

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilterType(newFilter);
      setPage('1');

      const newParams = new URLSearchParams(location.search);
      newParams.set('type', newFilter.toLowerCase());
      window.history.replaceState({}, '', `${location.pathname}?${newParams.toString()}`);
    }
  };

  const handleGoBack = () => {
    navigate('/inmobiliaria');
  };

  const filteredLands = landListings.filter(land => land.type === filterType);

  const startIndex = (parseInt(page) - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentLands = filteredLands.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredLands.length / itemsPerPage);

  return (
    <Box
      id="Terrenos"
      sx={{
        py: { xs: 8, md: 10 },
        mt: { xs: 4, md: 6 },
        backgroundColor: theme.palette.grey[50],
      }}
    >
      <Container maxWidth="lg">
        <Box ref={ref} sx={{ mb: { xs: 6, md: 8 }, textAlign: "center", position: 'relative' }}>
          <animated.div style={headerSpring}>
          <IconButton            
             onClick={handleGoBack}
             sx={{
              position: 'absolute',
                left: 0,
                top: { xs: '-50px', sm: '50%', md: '50%' }, 
                transform: { sm: 'translateY(-50%)', md: 'translateY(-50%)' },
                color: "#1C3155",
                fontSize: { xs: '2rem', sm: '2.5rem', md: '2rem' },
                "&:hover": {
                    backgroundColor: 'transparent',
               },
             }}
         >          
              <ArrowBackIcon sx={{ fontSize: 'inherit' }} />
            </IconButton>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                mb: 1.5,
                fontWeight: 700,
                color: theme.palette.text.primary,
              }}
            >
              Nuestros Terrenos Destacados
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: "700px", mx: "auto", lineHeight: 1.6 }}
            >
              Explora nuestra selección exclusiva de terrenos, ideales para construir tu hogar soñado o realizar tu próxima inversión inmobiliaria.
            </Typography>
          </animated.div>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 4, md: 6 } }}>
          <ToggleButtonGroup
            value={filterType}
            exclusive
            onChange={handleFilterChange}
            aria-label="filtro de tipo de terreno"
            sx={{
              borderRadius: 2,
              '& .MuiToggleButtonGroup-grouped': {
                margin: theme.spacing(0.5),
                border: '1px solid',
                borderColor: theme.palette.grey[400],
                '&.Mui-selected': {
                  backgroundColor: "#1C3155",
                  color: 'white',
                  borderColor: "#1C3155",
                  '&:hover': {
                    backgroundColor: "#1C3155",
                  },
                },
                '&:not(:first-of-type)': {
                  borderRadius: 2,
                  borderLeft: '1px solid',
                  borderColor: theme.palette.grey[400],
                },
                '&:first-of-type': {
                  borderRadius: 2,
                },
              },
            }}
          >
            <ToggleButton value="Venta" sx={{ fontWeight: 600, color: "#1C3155" }}>Venta</ToggleButton>
            <ToggleButton value="Alquiler" sx={{ fontWeight: 600, color: "#1C3155" }}>Alquiler</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {currentLands.map((land, index) => (
            <LandCard key={land.id} land={land} index={index} />
          ))}
        </Grid>

        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, mb: 4 }}>
            <ToggleButtonGroup
              value={page}
              exclusive
              onChange={handleChangePage}
              aria-label="paginación"
              sx={{
                borderRadius: 2,
                '& .MuiToggleButtonGroup-grouped': {
                  margin: theme.spacing(0.5),
                  border: '1px solid',
                  borderColor: theme.palette.grey[400],
                  '&.Mui-selected': {
                    backgroundColor: "#1C3155",
                    color: 'white',
                    borderColor: "#1C3155",
                  },
                  '&:not(:first-of-type)': {
                    borderRadius: 2,
                    borderLeft: '1px solid',
                    borderColor: theme.palette.grey[400],
                  },
                  '&:first-of-type': {
                    borderRadius: 2,
                  },
                },
              }}
            >
              {Array.from({ length: totalPages }, (_, i) => (
                <ToggleButton
                  key={i + 1}
                  value={(i + 1).toString()}
                  sx={{
                    width: 40,
                    height: 40,
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: "#1C3155",
                  }}
                >
                  {i + 1}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default InmobiliariaTerrenos;