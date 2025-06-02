import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Paper,
    IconButton,
    Backdrop,
    styled,
    Grid,
    Button
} from '@mui/material';
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

const allLocals = [
      // --- LOCALES EN VENTA ---
    {
        id: "local-1",
        type: "venta",
        title: "Local Comercial Centro Histórico",
        images: [
        ],
        price: "$",
        description: "Amplio local comercial en el corazón del centro histórico, ideal para cualquier negocio.",
        terrainSize: " m²",
        bedrooms: false,
        bathrooms: false,
        location: "Mérida, Venezuela",
        latitude: 8.5916,
        longitude: -71.1444,
        locationText: "Avenida 3, Calle 25, Local #1A, Centro",
        details: "Gran afluencia de público, zona turística, dos niveles, adaptable a diversos usos."
    },
  // --- LOCALES EN ALQUILER ---

    {
        id: "local-1",
        type: "Alquiler",
        title: "Local Comercial Centro Histórico",
        images: [
        ],
        price: "$",
        description: "Amplio local comercial en el corazón del centro histórico, ideal para cualquier negocio.",
        terrainSize: "m²",
        bedrooms: false,
        bathrooms: false,
        location: "Mérida, Venezuela",
        latitude: 8.5916,
        longitude: -71.1444,
        locationText: "Avenida 3, Calle 25, Local #1A, Centro",
        details: "Gran afluencia de público, zona turística, dos niveles, adaptable a diversos usos."
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
        fontSize: theme.breakpoints.down('sm') ? '1.5rem' : '2rem',
    },
    padding: theme.breakpoints.down('sm') ? theme.spacing(0.25) : theme.spacing(0.5),
    margin: theme.breakpoints.down('sm') ? theme.spacing(0.1) : theme.spacing(0.25),
}));

const LocalDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const local = allLocals.find(l => l.id === id);

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
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % (local?.images?.length || 1));
    }, [local?.images?.length]);

    const handlePrevImage = useCallback((event) => {
        if (event) {
            event.stopPropagation();
        }
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + (local?.images?.length || 1)) % (local?.images?.length || 1));
    }, [local?.images?.length]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (lightboxOpen && local?.images && local.images.length > 0) {
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
    }, [lightboxOpen, handleNextImage, handlePrevImage, handleCloseLightbox, local?.images]);

    if (!local) {
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
                <Typography variant="h6" color="error" sx={{ mt: { xs: 6, sm: 8 }, color: "black", fontSize: '1.6rem'}}>
                    Local no encontrado.
                </Typography>
            </Container>
        );
    }

    const mapPosition = local.latitude && local.longitude ? [local.latitude, local.longitude] : null;

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
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
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
                            flexGrow: 1,
                            color: 'black',
                            mt: 0,
                        }}
                    >
                        {local.title}
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: '40px',
                    mb: { xs: 1.5, md: 2 },
                }}>
                    {local.images && local.images.length > 0 ? (
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
                                    src={local.images?.[0]}
                                    alt={`${local.title} 1`}
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
                                {local.images?.map((img, index) => (
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
                                            onClick={() => handleImageClick(index)} >
                                            <img
                                                src={img}
                                                alt={`${local.title} thumbnail ${index + 1}`}
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
                        </>
                    ) : (
                        <Typography variant="caption" sx={{ textAlign: 'center', color: 'black', fontSize: '1.2rem' }}>
                            No hay imágenes disponibles.
                        </Typography>
                    )}
                </Box>

                {local?.type && (
                    <Typography
                        variant="caption"
                        sx={{
                            px: 1,
                            py: 0.5,
                            backgroundColor: local.type === 'venta' ? '#4CAF50' : '#2196F3',
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
                        {local.type === 'venta' ? 'En Venta' : 'En Alquiler'}
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
                    {local?.price}
                </Typography>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    mb: { xs: 1, md: 1.5 }
                }}>
                    {local?.terrainSize && (
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                            <LandscapeIcon sx={{ mr: 0.4, color: 'black', fontSize: { xs: '1.3rem', sm: '1.4rem', md: '1.5rem' } }} />
                            <Typography variant="body2" sx={{
                                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.2rem' },
                                color: 'black'
                            }}>
                                Terreno: {local.terrainSize}
                            </Typography>
                        </Box>
                    )}
                    {local?.bedrooms && (
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                            <BedIcon sx={{ mr: 0.5, color: 'black', fontSize: { xs: '1.3rem', sm: '1.2rem', md: '1.5rem' } }} />
                            <Typography variant="body2" sx={{
                                fontWeight: 500,
                                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.2rem' },
                                color: 'black'
                            }}>
                                Habitaciones: {local.bedrooms}
                            </Typography>
                        </Box>
                    )}
                    {local?.bathrooms && (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <BathtubIcon sx={{ mr: 0.5, color: 'black', fontSize: { xs: '1.3rem', sm: '1.4rem', md: '1.5rem' } }} />
                            <Typography variant="body2" sx={{
                                fontWeight: 500,
                                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.2rem' },
                                color: 'black'
                            }}>
                                Baños: {local.bathrooms}
                            </Typography>
                        </Box>
                    )}
                </Box>

                <Typography sx={{
                    display: 'flex',
                    fontWeight: 500,
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.2rem' },
                    textAlign: 'left',
                    width: '100%',
                    color: 'black',
                }}>
                    <Typography component="span" fontWeight="bold" sx={{ color: 'black' }}>Descripción: </Typography>
                    {local?.description}
                </Typography>
                {local?.details && (
                    <Box sx={{
                        display: 'flex',
                        fontWeight: 500,
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        textAlign: 'left',
                        width: '100%',
                        color: 'black',
                    }}>
                        <Typography component="span" sx={{ ml: 0.25, color: 'black' }}>
                            <Typography component="span" fontWeight="bold" sx={{ color: 'black' }}>Detalles Adicionales: </Typography>
                            {local.details}
                        </Typography>
                    </Box>
                )}

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
                                {local.location}
                            </Typography>
                            <Typography variant="body2" sx={{
                                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                                textAlign: 'left', width: '100%', color: 'black'
                            }}>
                                {local.locationText}
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
                                        {local.title} <br /> {local.locationText}
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
                {local.images && local.images.length > 1 && (
                    <NavigationButton
                        onClick={handlePrevImage}
                        sx={{ left: { xs: 1, sm: 5 } }}
                        aria-label="Imagen anterior"
                    >
                        <ArrowBackIosNewIcon sx={{ fontSize: '2rem' }} />
                    </NavigationButton>
                )}
                {local.images && local.images.length > 0 && (
                    <LightboxImage
                        src={local.images[selectedImageIndex]}
                        alt={`Imagen ampliada ${selectedImageIndex + 1}`}
                        onClick={(e) => e.stopPropagation()}
                    />
                )}

                {local.images && local.images.length > 1 && (
                    <NavigationButton
                        onClick={handleNextImage}
                        sx={{ right: { xs: 1, sm: 5 } }}
                        aria-label="Imagen siguiente"
                    >
                        <ArrowForwardIosIcon sx={{ fontSize: '2rem' }} />
                    </NavigationButton>
                )}
            </LightboxContainer>
        </Container>
    );
};

export default LocalDetails;