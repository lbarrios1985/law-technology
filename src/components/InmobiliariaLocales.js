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
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";


const localListings = [
  // --- LOCALES  EN VENTA ---
  {
    id: "local-1",
    title: "Local Comercial Centro Histórico",
    image: "",
    location: "Mérida, Mérida, Venezuela",
    price: "$120.000",
    type: "Venta",
    newOnMarket: true,
    description: "Amplio local comercial ideal para cualquier tipo de negocio. Ubicado en el corazón del centro histórico con alto tráfico peatonal.",
    area: "150 m²",
  },
  {
    id: "local-venta-2",
    title: "Oficina Ejecutiva con Vista Panorámica",
    image: "",
    location: "San Cristóbal, Táchira, Venezuela",
    price: "$85.000",
    type: "Venta",
    newOnMarket: false,
    description: "Moderna oficina con acabados de lujo y vistas impresionantes de la ciudad. Perfecta para empresas en crecimiento.",
    area: "90 m²",
  },
  {
    id: "local-venta-3",
    title: "Espacio Comercial en Mall Exclusivo",
    image: "",
    location: "Caracas, Miranda, Venezuela",
    price: "$250.000",
    type: "Venta",
    newOnMarket: true,
    description: "Oportunidad única para establecer tu negocio en uno de los malls más exclusivos de la ciudad. Gran afluencia de público.",
    area: "200 m²",
  },
  // --- LOCALES EN ALQUILER ---
  {
    id: "local-alquiler-1",
    title: "Local para Restaurante con Terraza",
    image: "",
    location: "Lechería, Anzoátegui, Venezuela",
    price: "$1.200/mes",
    type: "Alquiler",
    newOnMarket: true,
    description: "Listo para acondicionar a tu gusto, este local es ideal para un restaurante con espacio para terraza al aire libre.",
    area: "220 m²",
  },
  {
    id: "local-alquiler-2",
    title: "Oficina Corporativa en Rascacielos",
    image: "",
    location: "Mérida, Mérida, Venezuela",
    price: "$800/mes",
    type: "Alquiler",
    newOnMarket: false,
    description: "Exclusiva oficina en piso alto con vistas panorámicas de la ciudad, ideal para una sede corporativa.",
    area: "180 m²",
  },
  {
    id: "local-alquiler-3",
    title: "Estudio de Diseño o Arquitectura",
    image: "",
    location: "San Cristóbal, Táchira, Venezuela",
    price: "$500/mes",
    type: "Alquiler",
    newOnMarket: true,
    description: "Espacio creativo y funcional, perfecto para un estudio de diseño, arquitectura o cualquier profesión liberal.",
    area: "75 m²",
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
   <Grid
        item
        xs={12} sm={8} md={6} lg={4}
        ref={ref}
        sx={{ display: 'flex', flexDirection: 'column' }}
    >
    <animated.div style={{ ...springProps, height: '100%', display: 'flex', flexDirection: 'column' }}>
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
            image={local.image}
            alt={local.title}
            />

            <Box
                sx={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  backgroundColor: local.type === 'Venta' ? theme.palette.primary.main : theme.palette.success.main, // Blue for Sale, Green for Rent
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
                  {local.type === 'Venta' ? '💰' : '🔑'}
                </Typography>
                {local.type}
              </Box>

            {/* Removed the "Nuevo" tag section */}

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
              {local.price}
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
                Local en {local.type.toLowerCase()}
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
                }}
              >
                {local.title}
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
                  {local.location}
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                  {local.area && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, color: theme.palette.text.secondary }}>
                        <StorefrontIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                        <Typography variant="body2" sx={{ fontSize: '1rem' }}>
                            Área: {local.area}
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

  const filteredLocals = localListings.filter(local => local.type === filterType);

  const startIndex = (parseInt(page) - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentLocals = filteredLocals.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredLocals.length / itemsPerPage);

  return (
   <Box
      id="inmobiliaria-locales"
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
              Nuestros Locales Destacados
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: "700px", mx: "auto", lineHeight: 1.6 }}
            >
              Descubre nuestra exclusiva selección de locales y oficinas disponibles, diseñados para ofrecer el máximo potencial y ubicación estratégica para tu negocio.
            </Typography>
          </animated.div>
        </Box>

         {/* Botones de Filtro (Venta, Alquiler) */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 4, md: 6 } }}>
          <ToggleButtonGroup
            value={filterType}
            exclusive
            onChange={handleFilterChange}
            aria-label="filtro de tipo de local"
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
            <ToggleButton value="Venta" sx={{ fontWeight: 600, color: "#3756a9" }}>Venta</ToggleButton>
            <ToggleButton value="Alquiler" sx={{ fontWeight: 600, color: "#3756a9" }}>Alquiler</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {currentLocals.map((local, index) => (
            <LocalCard key={local.id} local={local} index={index} />
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
        )}
      </Container>
    </Box>
  );
};

export default InmobiliariaLocales;