import React from "react";
<<<<<<< HEAD
import { Typography, Container } from "@mui/material";
import InmobiliariaCards from "./InmobiliariaCards";

const Inmobiliaria = () => (
  <section id="inmobiliaria" style={{ padding: "2rem 0", background: "#23272F" }}>
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: "#fff", fontWeight: 700 }}>
=======
import { Typography, Container, Box } from "@mui/material";
import InmobiliariaCards from "./InmobiliariaCards";
import { useTheme } from "@emotion/react";

const Inmobiliaria = () => {
  const theme = useTheme ();

  return (
    <Box
    id= "inmobiliaria"
    sx={{
      backgroundColor: theme.palette.grey[100],
    }} >

<section id="inmobiliaria" style={{ padding: "2rem 0" }}>
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{   color: "#3756a9", fontWeight: 700 }}>
>>>>>>> de4a2cc (inmobiliaria)
        Inmobiliaria
      </Typography>
      <InmobiliariaCards />
    </Container>
  </section>
<<<<<<< HEAD
);
=======
        </Box>
  );
}

>>>>>>> de4a2cc (inmobiliaria)

export default Inmobiliaria;
