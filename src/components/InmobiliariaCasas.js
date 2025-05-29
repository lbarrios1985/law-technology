import React, { useState } from "react";
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
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import LandscapeIcon from '@mui/icons-material/Landscape';
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";


const houseListings = [
  // --- PROPIEDADES EN VENTA ---
  {
    id: "casa-1",
    title: "Cabañas de Montaña - Venta",
    image: "/images/inmobiliaria/Cabañas-1.jpg",
    location: " San Cristóbal, San Cristóbal, Táchira",
    price: "$",
    type: "Venta",
    newOnMarket: true,
    bedrooms: 5,
    bathrooms: 5,
    parkingSpaces: 2,
    terrainSize: "300,0 m²",
  },
  {
    id: "venta-2", 
    title: "Casa Familiar Moderna - Venta",
    image: "/images/inmobiliaria/Cabañas-1.jpg",
    location: " San Cristóbal, San Cristóbal, Táchira",
    price: "$",
    type: "Venta",
    newOnMarket: true,
    bedrooms: 4,
    bathrooms: 3,
    parkingSpaces: 1,
    terrainSize: "250,0 m²",
  },
  {
    id: "venta-3", 
    title: "Villa con Jardín - Venta",
    image: "/images/inmobiliaria/Cabañas-1.jpg",
    location: " San Cristóbal, San Cristóbal, Táchira",
    price: "$",
    type: "Venta",
    newOnMarket: true,
    bedrooms: 3,
    bathrooms: 2,
    parkingSpaces: 2,
    terrainSize: "280,0 m²",
  },
  {
    id: "venta-4", 
    title: "Amplia Residencia - Venta",
    image: "/images/inmobiliaria/Cabañas-1.jpg",
    location: " San Cristóbal, San Cristóbal, Táchira",
    price: "",
    type: "Venta",
    newOnMarket: true,
    bedrooms: 5,
    bathrooms: 4,
    parkingSpaces: 2,
    terrainSize: "320,0 m²",
  },
  {
    id: "venta-5", 
    title: "Mansión Exclusiva - Venta",
    image: "/images/inmobiliaria/Cabañas-1.jpg",
    location: " San Cristóbal, San Cristóbal, Táchira",
    price: "$",
    type: "Venta",
    newOnMarket: false,
    bedrooms: 6,
    bathrooms: 5,
    parkingSpaces: 3,
    terrainSize: "400,0 m²",
  },

  // --- PROPIEDADES EN ALQUILER ---
  {
    id: "alquiler-1", 
    title: "Apartamento Céntrico - Alquiler",
    image: "", 
    location: " Mérida, Mérida, Venezuela",
    price: "$",
    type: "Alquiler",
    newOnMarket: true,
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 1,
    terrainSize: null, 
  },
  {
    id: "alquiler-2", 
    title: "Apartamento Céntrico - Alquiler",
    image: "", 
    location: " Mérida, Mérida, Venezuela",
    price: "$",
    type: "Alquiler",
    newOnMarket: true,
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 1,
    terrainSize: null, 
  },
  {
    id: "alquiler-3", 
    title: "Apartamento Céntrico - Alquiler",
    image: "", 
    location: " Mérida, Mérida, Venezuela",
    price: "$",
    type: "Alquiler",
    newOnMarket: true,
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 1,
    terrainSize: null, 
  },

];


const HouseCard = ({ house, index }) => {
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

  const handleSeeDetails = (houseId) => {
    navigate(`/inmobiliaria/casas/${houseId}`);
  };

  return (
    <Grid  item
    xs={12} sm={8} md={6} lg={4}
    ref={ref}
    sx={{ display: 'flex', flexDirection: 'column' }}>
      <animated.div   
      style={{
            ...springProps,
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
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
              image={house.image}
              alt={house.title}
            />
            {/* Etiqueta "Venta o Alquiler" */}
            <Box
              sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              backgroundColor: house.type === 'Venta' ? theme.palette.primary.main : theme.palette.success.main,
              color: 'white',
              px: 1,
              py: 0.5,
              borderRadius: 1,
              fontWeight: 600,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              }}
              >
              <Typography component="span" sx={{ fontSize: '0.9rem', mr: 0.5 }}>
              {house.type === 'Venta' ? '💰' : '🏠'}
                </Typography>
                {house.type}
              </Box>
            <Typography
                variant="body1"
                sx={{
                  position: 'absolute',
                  bottom: 12,
                  right: 12,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
            >
              {house.price}
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
              Propiedad en {house.type.toLowerCase()}
            </Typography>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 700,
                color: theme.palette.text.primary,
                mb: 0.5,
                lineHeight: 1.2,
                fontSize: '1.1rem',
                minHeight: '2.4em',
              }}
            >
              {house.title}
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
              <Typography  variant="body2" sx={{ fontSize: '0.9rem' }}>
                {house.location}
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
                {house.terrainSize && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, color: theme.palette.text.secondary }}>
                      <LandscapeIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                      <Typography variant="body2" sx={{ fontSize: '1rem' }}>
                          Área: {house.terrainSize} 
                      </Typography>
                  </Box>
              )}
              <Stack
               direction="row"
               spacing={1.5}
               alignItems="center"
               flexWrap="wrap"
               useFlexGap
               sx={{
                   '& > div': {
                       mb: { xs: 0.5, sm: 0 },
                       display: 'flex',
                       alignItems: 'center',
                       fontSize: '0.3rem',
                   }
               }}
              >
                {house.bedrooms !== null && (
                  <Box>
                    <HotelIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '1rem' }}>{house.bedrooms}</Typography>
                    <Typography component="span" sx={{ ml: 0.5, fontSize: '1rem'}}>Hab.</Typography>
                  </Box>
                )}
                {house.bathrooms !== null && (
                  <Box>
                   <BathtubIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.9rem' }}>{house.bathrooms}</Typography>
                    <Typography component="span" sx={{ ml: 0.5, fontSize: '1rem'  }}>Baños</Typography>
                  </Box>
                )}
                {house.parkingSpaces !== null && (
                  <Box>
                    <DriveEtaIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.9rem' }}>{house.parkingSpaces}</Typography>
                    <Typography component="span" sx={{ ml: 0.5, fontSize: '1rem'}}>Estac.</Typography>
                  </Box>
                )}
              </Stack>
            </Box>

            <Button
              color="primary"
              onClick={() => handleSeeDetails(house.id)}
              sx={{
                mt: "auto",
                width: "100%",
                borderRadius: 2,
                fontWeight: 600,
                color: "#3756a9",
                py: 0.5,
                fontSize: '0.9rem',
                '&:hover': {
                    backgroundColor: "#3756a9",
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

const InmobiliariaCasas = () => {
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

   const handleChangePage = (event, newPage) => {
    if (newPage !== null) {
      setPage(newPage);
    }
  };

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilterType(newFilter);
      setPage('1');
    }
  };

  const filteredHouses = houseListings.filter(house => house.type === filterType);

  const startIndex = (parseInt(page) - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentHouses = filteredHouses.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredHouses.length / itemsPerPage);

  return (
    <Box
      id="casas"
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
              Nuestras Propiedades Destacadas
            </Typography>
            <Typography
               variant="body1"
               color="text.secondary"
               sx={{ maxWidth: "700px", mx: "auto", lineHeight: 1.6 }}
            >
              Explora nuestra cuidada selección de propiedades, diseñadas para ofrecerte el hogar o espacio de tus sueños con la mejor calidad y ubicación.
            </Typography>
          </animated.div>
        </Box>

        {/* Botones de Filtro (Venta, Alquiler) */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                  <ToggleButtonGroup
                    value={filterType}
                    exclusive
                    onChange={handleFilterChange}
                    aria-label="apartment type filter"
                    sx={{
                      borderRadius: 2,
                      '& .MuiToggleButtonGroup-grouped': {
                        margin: theme.spacing(0.5),
                        border: '1px solid',
                        borderColor: theme.palette.grey[400],
                        '&.Mui-selected': {
                          backgroundColor: "#3756a9",
                          color: 'white',
                          borderColor: "#3756a9",
                          '&:hover': {
                            backgroundColor: "#3756a9",
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
         <ToggleButton value="Venta" sx={{
          width: 100,
          fontWeight: 600,
          fontSize: '0.9rem',
          color: "#3756a9",
          }}>
          Venta
          </ToggleButton>
          <ToggleButton value="Alquiler" sx={{
          width: 100,
          fontWeight: 600,
          fontSize: '0.9rem',
          color: "#3756a9",
          }}>
          Alquiler</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {currentHouses.map((house, index) => (
            <HouseCard key={house.id} house={house} index={index} />
          ))}
        </Grid>

       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, mb: 4 }}>
                <ToggleButtonGroup
                  value={page}
                  exclusive
                  onChange={handleChangePage}
                  aria-label="pagination"
                  sx={{
                    borderRadius: 2,
                    '& .MuiToggleButtonGroup-grouped': {
                      margin: theme.spacing(0.5),
                      border: '1px solid',
                      borderColor: theme.palette.grey[400],
                      '&.Mui-selected': {
                        backgroundColor: "#3756a9",
                        color: 'white',
                        borderColor: "#3756a9",
                        '&:hover': {
                          backgroundColor: "#3756a9",
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
                  {Array.from({ length: totalPages }, (_, i) => (
                    <ToggleButton
                      key={i + 1}
                      value={(i + 1).toString()}
                      sx={{
                        width: 40,
                        height: 40,
                        fontWeight: 600,
                        fontSize: '1rem',
                        color: "#3756a9",
                      }}
                    >
                      {i + 1}
                    </ToggleButton>
                  ))}
      </ToggleButtonGroup>
             </Box>
           </Container>
         </Box>
  );
};

export default InmobiliariaCasas;

