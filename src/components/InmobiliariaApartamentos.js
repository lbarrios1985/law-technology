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


const apartmentListings = [
   // --- APARTAMENTOS EN VENTA ---
  {
    id: "venta-001", 
    title: "Apartamento de Lujo en el Centro",
    image: "/images/inmobiliaria/apartamento-1.jpg",
    location: "Centro, Mérida, Venezuela",
    price: "$120.000",
    type: "Venta",
    newOnMarket: true,
    bedrooms: 3,
    bathrooms: 2,
    parkingSpaces: 1,
    areaSize: "150 m²",
  },
  {
    id: "venta-002", 
    title: "Apartamento de Lujo en el Centro",
    image: "",
    location: "Centro, Mérida, Venezuela",
    price: "$120.000",
    type: "Venta",
    newOnMarket: true,
    bedrooms: 3,
    bathrooms: 2,
    parkingSpaces: 1,
    areaSize: "150 m²",
  },

  // --- APARTAMENTOS EN ALQUILER ---

  {
    id: "alquiler-001", 
    title: "Penthouse de Lujo con Terraza Panorámica y Jacuzzi Privado",
    image: "",
    location: "Campo Claro, Mérida, Venezuela",
    price: "$250.000",
    type: "Alquiler",
    newOnMarket: true,
    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 3,
    areaSize: "300 m²",
  },
  {
    id: "alquiler-002", 
    title: "Penthouse de Lujo con Terraza Panorámica y Jacuzzi Privado",
    image: "",
    location: "Campo Claro, Mérida, Venezuela",
    price: "$250.000",
    type: "Alquiler",
    newOnMarket: true,
    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 3,
    areaSize: "300 m²",
  },
  {
    id: "alquiler-003", 
    title: "Penthouse de Lujo con Terraza Panorámica y Jacuzzi Privado",
    image: "",
    location: "Campo Claro, Mérida, Venezuela",
    price: "$250.000",
    type: "Alquiler",
    newOnMarket: true,
    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 3,
    areaSize: "300 m²",
  },

];


const ApartmentCard = ({ apartment, index }) => {
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

  const handleSeeDetails = (apartmentId) => {
    navigate(`/inmobiliaria/apartamentos/${apartmentId}`);
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
              image={apartment.image}
              alt={apartment.title}
            />
            {/* Etiqueta "Venta o Alquiler" */}
            {apartment.newOnMarket && (
              <Box
              sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              backgroundColor: apartment.type === 'Venta' ? theme.palette.primary.main : theme.palette.success.main,
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
              {apartment.type === 'Venta' ? '💰' : '🏠'}
              </Typography>
              </Box>
            )}
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
              {apartment.price}
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
              Apartamento en {apartment.type.toLowerCase()}
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
              {apartment.title}
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
                {apartment.location}
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
                {apartment.areaSize && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, color: theme.palette.text.secondary }}>
                      <LandscapeIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                      <Typography variant="body2" sx={{ fontSize: '1rem' }}>
                          Área: {apartment.areaSize}
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
                {apartment.bedrooms !== undefined && (
                  <Box>
                    <HotelIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '1rem' }}>{apartment.bedrooms}</Typography>
                    <Typography component="span" sx={{ ml: 0.5, fontSize: '1rem'}}>Hab.</Typography>
                  </Box>
                )}
                {apartment.bathrooms !== undefined && (
                  <Box>
                    <BathtubIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.9rem' }}>{apartment.bathrooms}</Typography>
                    <Typography component="span" sx={{ ml: 0.5, fontSize: '1rem'  }}>Baños</Typography>
                  </Box>
                )}
                {apartment.parkingSpaces !== undefined && (
                  <Box>
                    <DriveEtaIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                    <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.9rem' }}>{apartment.parkingSpaces}</Typography>
                    <Typography component="span" sx={{ ml: 0.5, fontSize: '1rem'}}>Estac.</Typography>
                  </Box>
                )}
              </Stack>
            </Box>

            <Button            
        color="primary"
        onClick={() => handleSeeDetails(apartment.id)}
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


const InmobiliariaApartamentos = () => {
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


  const filteredApartments = apartmentListings.filter(apartment => apartment.type === filterType);

  const startIndex = (parseInt(page) - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentApartments = filteredApartments.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredApartments.length / itemsPerPage);

  return (
    <Box
      id="apartamentos"
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
              Nuestros Apartamentos Destacados
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: "700px", mx: "auto", lineHeight: 1.6 }}
            >
              Descubre nuestra exclusiva selección de apartamentos, desde modernos estudios hasta espaciosos penthouses, diseñados para tu estilo de vida.
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
              Alquiler
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>


        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {currentApartments.map((apartment, index) => (
            <ApartmentCard key={apartment.id} apartment={apartment} index={index} />
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

export default InmobiliariaApartamentos;