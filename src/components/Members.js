import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  useTheme,
} from "@mui/material";
import { LinkedIn } from "@mui/icons-material";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import "../styles/styles.css";

const teamMembers = [
  {
    name: "Hayglee Calderas",
    image: "images/Hayglee.webp",
    specialization: "Especialista en Propiedad Intelectual e Inmobiliario",
    activities:
      "La Abg. Hayglee Calderas ofrece servicios especializados en Propiedad Intelectual, " +
      "respaldados por su experiencia como Coordinadora Estadal del Servicio Autónomo " +
      "de la Propiedad Intelectual (SAPI) en Mérida. Brinda seguridad y protección " +
      "a tus creaciones intelectuales. Igualmente, es agremiada de la CIM y certificada por la CIV, ejerciendo su amplio conocimiento en el ramo inmobiliario, tu inmueble siempre será su prioridad.",
    linkedin: "https://www.linkedin.com/in/hayglee-calderas/",
  },
  {
    name: "Clara Inés Mejía Monsalve",
    image: "images/Clara.webp",
    specialization: "Especialista en Derecho Civil y Propiedad Intelectual",
    activities:
      "La Abg. Clara Mejía es experta en asesoría legal integral, redacción de documentos precisos y representación efectiva para defender sus derechos e intereses en cada situación, " +
      "además con gran experiencia en Propiedad Intelectual brindando las herramientas necesarias para asegurar la exclusividad de sus activos intangibles y maximizar su potencial comercial.",
    linkedin:
      "https://www.linkedin.com/in/clara-in%C3%A9s-mejia-monsalve-753402288/",
  },
  {
    name: "Alexandra Mercado",
    image: "images/Alexandra.JPG",
    specialization: "Especialista Mercantil y Contable",
    activities:
      "Es tu abogado mercantil con toda la experiencia contable. Dedicada a ofrecer soluciones jurídicas efectivas y personalizadas para tu empresa, compañía o pyme; con un enfoque en proteger los intereses de sus clientes, garantiza un servicio transparente y enfocado en el éxito de cada caso.",
    // linkedin:
    //   "https://www.linkedin.com/in/clara-in%C3%A9s-mejia-monsalve-753402288/",
  },
  {
    name: "Leonardo Chacín",
    image: "images/Leonardo.JPG",
    specialization: "Especialista en Derecho Penal",
    activities:
      "Abogado Penalista, con experiencia en el área de Derecho Penal dónde se busca representar a las personas que han sido acusadas de un delito bajo los principios de igualdad y justicia! " +
      "Asesorías en materia penal. Defensa privada en las distintas etapas del proceso Querella. Solicitudes y diligencias antes Ministerio Público, Tribunales y organismos del Estado.",
    // linkedin: "https://www.linkedin.com/in/hayglee-calderas/",
  },
];

const MemberCard = ({ member, index }) => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    delay: index * 200,
    config: { tension: 280, friction: 60 },
  });

  const handleLinkedIn = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Grid item xs={12} md={6} ref={ref}>
      <animated.div style={springProps}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.3s ease-in-out",
            overflow: "hidden",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: theme.shadows[8],
            },
            width: "100%",
            maxWidth: 500,
            mx: "auto",
            minHeight: { xs: "auto", md: "663px" }, // Set minimum height for desktop
          }}
        >
          <Box
<<<<<<< HEAD
=======
          id="members"
>>>>>>> de4a2cc (inmobiliaria)
            sx={{
              position: "relative",
              width: "100%",
              height: "auto",
              overflow: "hidden",
              backgroundColor: theme.palette.grey[100],
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "contain",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              image={member.image}
              alt={`Foto de ${member.name}`}
            />
          </Box>
          <CardContent
            sx={{
              flex: 1,
              p: 3,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                }}
              >
                {member.name}
              </Typography>
              {member.linkedin && (
                <IconButton
                  onClick={() => handleLinkedIn(member.linkedin)}
                  sx={{
                    color: theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: "rgba(26, 35, 126, 0.08)",
                      transform: "scale(1.1)",
                    },
                    transition: "transform 0.2s ease-in-out",
                  }}
                  title="Ver perfil profesional en LinkedIn"
                  size="small"
                >
                  <LinkedIn />
                </IconButton>
              )}
            </Box>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 2,
                color: theme.palette.secondary.main,
                fontWeight: 600,
                minHeight: "48px",
              }}
            >
              {member.specialization}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                lineHeight: 1.6,
                mb: 2,
                flex: 1,
              }}
            >
              {member.activities}
            </Typography>
          </CardContent>
        </Card>
      </animated.div>
    </Grid>
  );
};

const Members = () => {
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
<<<<<<< HEAD
      id="team"
=======
      id="members"
>>>>>>> de4a2cc (inmobiliaria)
      sx={{
        py: { xs: 8, md: 12 },
        mt: { xs: 4, md: 6 },
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <Box ref={ref} sx={{ mb: 8, textAlign: "center" }}>
          <animated.div style={headerSpring}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontWeight: 700,
                color: theme.palette.burgundy[700],
              }}
            >
              Nuestro Equipo
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
            >
              Profesionales comprometidos con la excelencia y el servicio al
              cliente
            </Typography>
          </animated.div>
        </Box>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 80,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          keyboard={true}
          modules={[
            EffectCoverflow,
            Pagination,
            Navigation,
            Keyboard,
            Autoplay,
          ]}
          className="mySwiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide className="mi-diapositiva">
              <MemberCard key={member.name} member={member} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Members;
