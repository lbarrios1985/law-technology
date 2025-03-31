import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, useTheme } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
  { name: 'Domitila', image: '/images/marcas/domitila.png' },
  { name: 'Fattoria', image: '/images/marcas/fattoria.png' },
  { name: 'La Ventanita', image: '/images/marcas/la_ventanita.png' },
  { name: 'Maxi Donas', image: '/images/marcas/maxi_donas.png' },
  { name: 'Red Side', image: '/images/marcas/red_side.png' },
  { name: 'San José', image: '/images/marcas/san_jose.png' },
  { name: 'Suraki', image: '/images/marcas/suraki.png' },
  { name: 'Valle Rojo', image: '/images/marcas/valle_rojo.png' },
];

const BrandCarousel = () => {
  const theme = useTheme();

  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '60px',
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Box
      sx={{
        width: '100%',
        py: 4,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          color: theme.palette.primary.main,
          mb: 4,
          fontWeight: 'bold',
        }}
      >
        Marcas Registradas
      </Typography>
      <Box
        sx={{
          maxWidth: '90%',
          margin: '0 auto',
          '& .slick-slide': {
            px: 2,
          },
          '& .slick-track': {
            display: 'flex',
            alignItems: 'center',
          },
        }}
      >
        <Slider {...settings}>
          {brands.map((brand) => (
            <Box
              key={brand.name}
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src={brand.image}
                alt={`${brand.name} logo`}
                sx={{
                  width: '100%',
                  maxWidth: 180,
                  height: 'auto',
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />

            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default BrandCarousel;
