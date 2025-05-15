import React from "react";
import { Typography, Container } from "@mui/material";
import InmobiliariaCards from "./InmobiliariaCards";

const Inmobiliaria = () => (
  <section id="inmobiliaria" style={{ padding: "2rem 0", background: "#23272F" }}>
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: "#fff", fontWeight: 700 }}>
        Inmobiliaria
      </Typography>
      <InmobiliariaCards />
    </Container>
  </section>
);

export default Inmobiliaria;
