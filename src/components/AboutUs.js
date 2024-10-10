import React from "react";
import { useSpring, animated } from "react-spring";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

const AboutUs = () => {
  const theme = useTheme();
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.section
      id="about-us"
      style={{
        ...styles.section,
        ...fadeIn,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <div id="Quiénes Somos">
        <Typography
          variant="h2"
          style={{ ...styles.heading, color: theme.palette.primary.main }}
        >
          Quiénes Somos
        </Typography>
        <Typography
          variant="body1"
          style={{ ...styles.paragraph, color: theme.palette.text.primary }}
        >
          En el consultorio jurídico Law technology, somos un equipo de abogados
          apasionados y comprometidos con la excelencia en la asesoría legal.
          Fundado en el año 2023 y ubicado en el centro comercial peckas,
          nuestro consultorio jurídico se distingue por ofrecer servicios
          jurídicos de alta calidad en una amplia gama de las áreas del derecho.
          Desde nuestros inicios, nos hemos enfocado en proporcionar soluciones
          eficaces que respondan a las necesidades de nuestros clientes,
          contamos con un equipo multidisciplinario de profesionales altamente
          cualificados, cada uno con gran experiencia en áreas como: propiedad
          intelectual, derecho civil, mercantil, penal, laboral administrativo
          así como también brindamos servicios de marketing marcario,
          inmobiliaria y desarrollo web. Nos enorgullece nuestra capacidad de
          integrar las diversas ramas del derecho y así brindarle a nuestros
          clientes una visión holística y soluciones innovadoras. Nos guiamos
          por los valores de integridad, profesionalismo y dedicación,
          comprometidos así a tratar cada caso con el máximo cuidado y atención.
          <strong>¡Somos el equipo de altura en la ciudad de Mérida!</strong>
        </Typography>
      </div>
    </animated.section>
  );
};

const styles = {
  section: {
    padding: "2rem",
    borderRadius: "8px",
    margin: "1rem 0",
  },
  heading: {
    textAlign: "center",
    marginBottom: "1rem",
  },
  paragraph: {
    lineHeight: "1.6",
  },
};

export default AboutUs;
