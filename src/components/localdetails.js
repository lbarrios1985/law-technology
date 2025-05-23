import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Typography, Paper } from '@mui/material';


const allLocals = [
  {
    id: "local-1",
    title: "",
    image: "",
    description: "",
    location: "",
    price: "$",
    details: "",
  },
  {
    id: "local-2",
    title: "",
    image: "",
    description: "",
    location: "",
    price: "$",
    details: ""
  },
];

const LocalDetails = () => {
  const { id } = useParams(); 
  const local = allLocals.find(l => l.id === id);

  if (!local) {
    return (
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h5" color="error">Local no encontrado.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 10 }, mt: { xs: 4, md: 6 } }}>
      <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
          {local.title}
        </Typography>
        <Box sx={{ mb: 4 }}>
          <img src={local.image} alt={local.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </Box>
        <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
          {local.price}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1, color: 'text.secondary' }}>
          Ubicación: {local.location}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
          Descripción: {local.description}
        </Typography>
        {local.details && (
          <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 3 }}>
            Detalles Adicionales: {local.details}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};




export default LocalDetails;