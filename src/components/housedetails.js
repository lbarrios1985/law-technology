import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Paper, IconButton, Backdrop, styled, Grid, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LandscapeIcon from '@mui/icons-material/Landscape';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const allHouses = [
    // --- PROPIEDADES EN VENTA ---
    {
        id: "casa-1",
        type: "venta",
        title: "Cabaña de Ensueño",
        images: [
            "/images/inmobiliaria/Cabañas-1.jpg",
            "/images/inmobiliaria/Cabaña-2.jpg",
            "/images/inmobiliaria/Cabaña-3.jpg",
            "/images/inmobiliaria/Cabaña-4.jpg",
        ],
        price: "$",
        description: "Una espaciosa casa con jardín en una zona tranquila, ideal para familias.",
        terrainSize: "300,0 m²",
        bedrooms: true,
        bathrooms: true,
        location: "Mérida, Venezuela",
        latitude: 8.5897,
        longitude: -71.1966,
        locationText: "Urbanización Cabañas del Sol, Calle Principal, #123",
        details: "Cocina moderna, piscina privada, seguridad 24 horas, cerca de comercios y naturaleza."
    },

    // --- PROPIEDADES EN ALQUILER ---

    {
        id: "alquiler-1",
        type: "alquiler", 
        title: "Casa Familiar con Amplio Jardín",
        images: [
            "/images/inmobiliaria/Cabañas-1.jpg", 
        ],
        price: "$", 
        description: "Amplia casa en alquiler, perfecta para familias, con un gran espacio exterior.",
        terrainSize: " m²",
        bedrooms: true,
        bathrooms: true,
        location: "Mérida, Venezuela",
        latitude: 8.6015, 
        longitude: -71.1472, 
        locationText: "Sector Las Delicias, Avenida 5, Casa #45",
        details: "Garaje techado, áreas verdes, fácil acceso al transporte público."
    },
];

const LightboxContainer = styled(Backdrop)(({ theme }) => ({
    zIndex: theme.zIndex.modal + 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
}));

const LightboxImage = styled('img')({
    maxWidth: '85%',
    maxHeight: '85%',
    borderRadius: '4px',
    objectFit: 'contain',
    userSelect: 'none',
});

const NavigationButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    zIndex: 11,
    padding: theme.spacing(0.5),
    margin: theme.spacing(0.25),
    alignSelf: 'center',
    '&.prev': {
        left: theme.spacing(2),
    },
    '&.next': {
        right: theme.spacing(2),
    },
    '& .MuiSvgIcon-root': {
        fontSize: '2rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
        },
    },
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0.25),
        margin: theme.spacing(0.1),
    },
}));

const HouseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

   
    const house = allHouses.find(h => h.id === id);

 
    const handleImageClick = useCallback((index) => {
        setSelectedImageIndex(index);
        setLightboxOpen(true);
    }, []);


    const handleCloseLightbox = useCallback(() => {
        setLightboxOpen(false);
    }, []);

   
    const handleNextImage = useCallback((event) => {
        if (event) {
            event.stopPropagation(); 
        }
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % (house?.images?.length || 1));
    }, [house?.images?.length]);

    // Pasa a la imagen anterior en la lightbox
    const handlePrevImage = useCallback((event) => {
        if (event) {
            event.stopPropagation(); // Evita que se cierre la lightbox si se hace clic en la flecha
        }
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + (house?.images?.length || 1)) % (house?.images?.length || 1));
    }, [house?.images?.length]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (lightboxOpen && house?.images && house.images.length > 0) {
                switch (event.key) {
                    case 'ArrowRight':
                        handleNextImage();
                        break;
                    case 'ArrowLeft':
                        handlePrevImage();
                        break;
                    case 'Escape':
                        handleCloseLightbox();
                        break;
                    default:
                        break;
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [lightboxOpen, handleNextImage, handlePrevImage, handleCloseLightbox, house?.images]);

   
    if (!house) {
        return (
            <Container sx={{
                py: 4,
                textAlign: 'center',
                position: 'relative',
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <IconButton
                    onClick={() => navigate(-1)}
                    sx={{
                        position: 'absolute',
                        top: { xs: 40, sm: 40 }, 
                        left: { xs: 16, sm: 20 },
                        zIndex: 1,
                        backgroundColor: 'transparent',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            boxShadow: 'none',
                        },
                        transition: 'background-color 0.2s ease',
                        color: 'black',
                        border: 'none',
                        boxShadow: 'none',
                    }}
                >
                    <ArrowBackIcon sx={{ fontSize: '1.6rem' }} />
                </IconButton>
                <Typography variant="h6" color="error" sx={{ mt: { xs: 6, sm: 8 },  color: "black", fontSize: '1.6rem' }}>
                    Casa no encontrada.
                </Typography>
            </Container>
        );
    }


    const mapPosition = house.latitude && house.longitude ? [house.latitude, house.longitude] : null;


    const handleOpenInMap = () => {
        if (mapPosition) {
            window.open(`https://maps.google.com/?q=${mapPosition[0]},${mapPosition[1]}`, '_blank');
        }
    };

    return (
        <Container maxWidth="sm" sx={{
            py: { xs: 1, sm: 2, md: 3 },
            mt: { xs: 4, sm: 6, md: 8 },
            px: { xs: 1, sm: 1.5, md: 0 },
        }}>
            <Paper elevation={2} sx={{
                p: { xs: 1, sm: 1.5, md: 2 },
                borderRadius: 1,
                position: 'relative',
                overflow: 'hidden',
            }}>
                <Box sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    mb: { xs: 1.5, md: 2 },
                    minHeight: { xs: '48px', sm: '64px' }
                }}>
                    <IconButton
                        onClick={() => navigate(-1)}
                        sx={{
                            position: 'absolute',
                            left: { xs: 4, md: 8 },
                            zIndex: 2,
                            backgroundColor: 'transparent', 
                            '&:hover': {
                            backgroundColor: 'transparent', 
                            boxShadow: 'none', 
                            },
                            transition: 'none', 
                            color: 'black',
                            border: 'none', 
                            boxShadow: 'none', 
                        }}
                    >
                        <ArrowBackIcon sx={{ fontSize: '1.6rem' }} />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                            textAlign: 'center',
                            color: 'black',
                            mt: 0,
                            mb: 0, 
                        }}
                    >
                        {house.title}
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: '40px',
                    mb: { xs: 1.5, md: 2 },
                }}>
                    {house.images && house.images.length > 0 ? (
                        <>
                            <Box sx={{
                                width: '100%',
                                maxWidth: '450px',
                                height: 'auto',
                                mb: 1.5,
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <img
                                    src={house.images[0]}
                                    alt={`${house.title} 1`}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '300px',
                                        objectFit: 'contain',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleImageClick(0)}
                                />
                            </Box>

                            <Grid container spacing={1} justifyContent="center">
                                {house.images.slice(1).map((img, index) => (
                                    <Grid item xs={3} sm={2.5} md={2} key={index}>
                                        <Box
                                            sx={{
                                                width: '100%',
                                                height: { xs: '60px', sm: '70px', md: '80px' },
                                                overflow: 'hidden',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                '&:hover': {
                                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                                                    transform: 'scale(1.02)',
                                                    transition: 'all 0.2s ease-in-out',
                                                }
                                            }}
                                            onClick={() => handleImageClick(index + 1)} >
                                            <img
                                                src={img}
                                                alt={`${house.title} thumbnail ${index + 2}`}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    borderRadius: '4px',
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                            {house.images.length > 5 && (
                                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                                    <button
                                        style={{
                                            padding: '8px 16px',
                                            backgroundColor: '#A0978C',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            fontSize: '1rem',
                                            fontWeight: 'bold',
                                        }}
                                        onClick={() => handleImageClick(0)}
                                    >
                                        {house.images.length} Fotos
                                    </button>
                                </Box>
                            )}
                        </>
                    ) : (
                        <Typography variant="caption" sx={{ textAlign: 'center', color: 'black', fontSize: '1.2rem'}}>
                            No hay imágenes disponibles.
                        </Typography>
                    )}
                </Box>

                {house?.type && (
                    <Typography
                        variant="caption"
                        sx={{
                            px: 1,
                            py: 0.5,
                            backgroundColor: house.type === 'venta' ? '#4CAF50' : '#2196F3', 
                            color: 'white',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            fontSize: '0.8rem',
                            mb: 0.5,
                            display: 'block', 
                            width: 'fit-content', 
                        }}
                    >
                        {house.type === 'venta' ? 'En Venta' : 'En Alquiler'}
                    </Typography>
                )}
                <Typography variant="subtitle1"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.6rem' },
                        textAlign: 'left',
                        width: '100%',
                        color: 'black',
                        mb: 1, 
                    }}>
                    {house.price}
                </Typography>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    mb: { xs: 1, md: 1.5 }
                }}>
                    {house.terrainSize && (
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                            <LandscapeIcon sx={{ mr: 0.4, color: 'black', fontSize: { xs: '1.3rem', sm: '1.4rem', md: '1.5rem' } }} />
                            <Typography variant="body2" sx={{
                                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.2rem' },
                                color: 'black'
                            }}>
                                Terreno: {house.terrainSize}
                            </Typography>
                        </Box>
                    )}
                    {house.bedrooms && (
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                            <BedIcon sx={{ mr: 0.5, color: 'black', fontSize: { xs: '1.3rem', sm: '1.2rem', md: '1.5rem' } }} />
                            <Typography variant="body2" sx={{
                                fontWeight: 500,
                                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.2rem' },
                                color: 'black'
                            }}>
                                Habitaciones: {house.bedrooms}
                            </Typography>
                        </Box>
                    )}
                    {house.bathrooms && (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <BathtubIcon sx={{ mr: 0.5, color: 'black', fontSize: { xs: '1.3rem', sm: '1.4rem', md: '1.5rem' } }} />
                            <Typography variant="body2" sx={{
                                fontWeight: 500,
                                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.2rem' },
                                color: 'black'
                            }}>
                                Baños: {house.bathrooms}
                            </Typography>
                        </Box>
                    )}
                </Box>

                {/* Descripción */}
                <Typography sx={{
                    display: 'flex',
                    fontWeight: 500,
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.2rem' },
                    textAlign: 'left',
                    width: '100%',
                    color: 'black',
                }}>
                    <Typography component="span" fontWeight="bold" sx={{ color: 'black' }}>Descripción: </Typography>
                    {house.description}
                </Typography>
                {house.details && (
                    <Box sx={{
                        display: 'flex',
                        fontWeight: 500,
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        textAlign: 'left',
                        width: '100%',
                        color: 'black',
                    }}>
                        {house.icon} 
                        <Typography component="span" fontWeight="bold" sx={{ color: 'black' }}>Detalles Adicionales: </Typography>
                        <Typography component="span" sx={{ ml: 0.25, color: 'black' }}>
                            {house.details}
                        </Typography>
                    </Box>
                )}

                {/* Sección del Mapa */}
                {mapPosition && (
                    <Box sx={{
                        mt: 3,
                        width: '100%',
                        borderRadius: '4px',
                        overflow: 'hidden',
                    }}>
                        <Box sx={{ mb: { xs: 1, md: 1.5 } }}>
                            <Typography variant="body1" sx={{
                                fontWeight: 500,
                                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.2rem' },
                                textAlign: 'left', width: '100%',
                                color: 'black',
                            }}>
                                {house.location}
                            </Typography>
                            <Typography variant="body2" sx={{
                                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                                textAlign: 'left', width: '100%', color: 'black'
                            }}>
                                {house.locationText}
                            </Typography>
                        </Box>
                        <Button
                            onClick={handleOpenInMap}
                            sx={{
                                backgroundColor: '#D3BE9B',
                                color: 'black',
                                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                                padding: { xs: '6px 12px', sm: '8px 16px' },
                                borderRadius: '4px',
                                textTransform: 'none',
                                minWidth: 'unset',
                                boxShadow: 'none',
                                mb: 2,
                                '&:hover': {
                                    backgroundColor: '#C5AE87',
                                    boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                                },
                            }}
                        >
                           Ver Ubicación
                        </Button>
                        <Box sx={{ height: '300px' }}>
                            <MapContainer
                                center={mapPosition}
                                zoom={16}
                                scrollWheelZoom={false}
                                style={{ height: '100%', width: '100%' }}
                            >
                                <TileLayer
                                    attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={mapPosition}>
                                    <Popup>
                                        {house.title} <br /> {house.locationText}
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </Box>
                    </Box>
                )}
            </Paper>
          
            <LightboxContainer open={lightboxOpen} onClick={handleCloseLightbox}>
                <IconButton
                    onClick={handleCloseLightbox}
                    sx={{
                        position: 'absolute',
                        top: { xs: 2, sm: 5 },
                        right: { xs: 2, sm: 5 },
                        color: 'white',
                        zIndex: 12,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    }}
                >
                    <CloseIcon sx={{ fontSize: '2rem' }} />
                </IconButton>
                {house.images && house.images.length > 1 && (
                    <NavigationButton
                        onClick={handlePrevImage}
                        sx={{ left: { xs: 1, sm: 5 } }}
                        aria-label="Imagen anterior"
                        className="prev"
                    >
                        <ArrowBackIosNewIcon sx={{ fontSize: '2rem' }} />
                    </NavigationButton>
                )}
                {house.images && house.images.length > 0 && (
                    <LightboxImage
                        src={house.images[selectedImageIndex]}
                        alt={`Imagen ampliada ${selectedImageIndex + 1}`}
                        onClick={(e) => e.stopPropagation()} 
                    />
                )}

                {house.images && house.images.length > 1 && (
                    <NavigationButton
                        onClick={handleNextImage}
                        sx={{ right: { xs: 1, sm: 5 } }}
                        aria-label="Imagen siguiente"
                        className="next"
                    >
                        <ArrowForwardIosIcon sx={{ fontSize: '2rem' }} />
                    </NavigationButton>
                )}
            </LightboxContainer>
        </Container>
    );
};

export default HouseDetails;