import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamCarousel = () => {
  const teamMembers = [
    {
      name: "Hayglee Calderas",
      image: "images/Hayggle.jpg",
      specialization: "Especialista en Propiedad Intelectual",
      activities:
        "La Abg. Hayglee Calderas ofrece servicios especializados en Propiedad Intelectual, " +
        "respaldados por su experiencia como Coordinadora Estadal del Servicio Autónomo " +
        "de la Propiedad Intelectual (SAPI) en Mérida. Brinda seguridad y protección " +
        "a tus creaciones intelectuales, abarcando tanto Derecho de Autor como Propiedad Industrial. " +
        "Con su conocimiento y habilidades, asegura los mejores resultados para proteger " +
        "tus ideas con argumentos legales sólidos, manteniendo siempre ética profesional y confidencialidad.",
    },
    {
      name: "Clara Mejía",
      image: "images/Clara.jpg",
      specialization: "Abogada Civil",
      activities:
        "La Abg. Clara Mejía es experta en Derecho Civil, especializada en resolver problemas " +
        "legales de familia, bienes, herencias y otros temas civiles. Fomenta la conciliación " +
        "como primera opción, utilizando sus habilidades de comunicación y negociación " +
        "para alcanzar acuerdos favorables. Clara ofrece un servicio dedicado a organizar " +
        "el presente y construir un futuro sólido, asegurando siempre los mejores intereses de sus clientes " +
        "con profesionalismo y confidencialidad.",
    },
  ];

  const springProps = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 220, friction: 12 },
  });

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id ="Nuestro Equipo" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Slider {...settings}>
        {teamMembers.map((member) => (
          <animated.div style={springProps} key={member.name}>
            <Card sx={{ display: "flex", boxShadow: 3 }}>
              <CardMedia
                component="img"
                sx={{ width: 200, height: 200, objectFit: "cover" }}
                image={member.image}
                alt={`Foto de ${member.name}`}
              />
              <CardContent sx={{ flex: 1, textAlign: "left" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  sx={{ mb: 1 }}
                >
                  {member.specialization}
                </Typography>
                <Typography variant="body2">{member.activities}</Typography>
              </CardContent>
            </Card>
          </animated.div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamCarousel;
