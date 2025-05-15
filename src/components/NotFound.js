import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container style={{ textAlign: "center", padding: "4rem 0" }}>
      <Typography variant="h2" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Página no encontrada
      </Typography>
      <Typography variant="body1" paragraph>
        Lo sentimos, la página que buscas no existe.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Volver al inicio
      </Button>
    </Container>
  );
};

export default NotFound;
