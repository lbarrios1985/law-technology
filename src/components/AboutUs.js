import React from "react";
import { useSpring, animated } from "react-spring";
import { Typography, Container, Box, Paper } from "@mui/material";

const sections = [
  {
    id: "Quiénes Somos",
    title: "Quiénes Somos",
    content:
      "En Law Technology, somos un equipo de abogados especializados en ofrecer soluciones legales efectivas. Desde 2023, brindamos asesoría de calidad en diversas áreas del derecho, como propiedad intelectual, civil, mercantil, penal y laboral, además de servicios complementarios como marketing marcario e inmobiliario. Nos enfocamos en resolver cada caso de forma integral, con un enfoque innovador y comprometido. Nos guía la excelencia, la integridad y el compromiso con nuestros clientes.",
  },
  {
    id: "Misión",
    title: "Misión",
    content:
      "Nuestro propósito es ofrecer asesoría legal integral y personalizada, enfocada en proteger los derechos y necesidades de nuestros clientes. Nos esforzamos por ser aliados estratégicos, proporcionando soluciones prácticas y seguras.",
  },
  {
    id: "Visión",
    title: "Visión",
    content:
      "Aspiramos a ser el consultorio jurídico de referencia, reconocido por nuestra ética, profesionalismo y la confianza de nuestros clientes, apoyando su éxito a través de un enfoque legal innovador y eficiente.",
  },
];

function Section({ id, title, content }) {
  const springProps = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { tension: 220, friction: 120 },
  });
  return (
    <animated.div style={springProps}>
      <div id={id}>
        <Paper
          elevation={3}
          style={{ padding: "20px", marginBottom: "40px" }}
        >
          <Typography variant="h2" color="primary">
            {title}
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            {content}
          </Typography>
        </Paper>
      </div>
    </animated.div>
  );
}

const AboutUs = () => {
  return (
    <Container>
      <Box sx={{ padding: "60px 0" }}>
        {/* center the typografy container */}
        <Typography
          variant="h1"
          color="primary"
          gutterBottom
          textAlign="center"
        >
          Bienvenido a Law Technology
        </Typography>
        {sections.map((section) => (
          <Section
            id={section.id}
            key={section.title}
            title={section.title}
            content={section.content}
          />
        ))}
      </Box>
    </Container>
  );
};

export default AboutUs;
