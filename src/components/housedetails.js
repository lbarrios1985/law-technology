import { Container, Box, Typography, Paper } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const allHouses = [
    {
        id: "casa-1",
        title: "",
        image: "",
        description: "",
        location: "",
        price: "$",
        details: "",
      },
      {
        id: "casa-2",
        title: "",
        image: "",
        description: "",
        location: "",
        price: "$",
        details: ""
      },
]

const HouseDetails = () => {
    const { id } = useParams ();
    const house = allHouses.find(h => h.id === id);

    if (!house) {

return (
    <Container sx={{ py: 8, textAlign: "center"}}>
 <Typography variant="h5" color="error">Casa no encontrado.</Typography>
    </Container>
);
}
return (
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 10 }, mt: { xs: 4, md: 6 } }}>
    <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
        {house.title}
      </Typography>
      <Box sx={{ mb: 4 }}>
        <img src={house.image} alt={house.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      </Box>
      <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
        {house.price}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, color: 'text.secondary' }}>
        Ubicación: {house.location}
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
        Descripción: {house.description}
      </Typography>
      {house.details && (
        <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 3 }}>
          Detalles Adicionales: {house.details}
        </Typography>
      )}
    </Paper>
  </Container>
);
}


export default HouseDetails;
