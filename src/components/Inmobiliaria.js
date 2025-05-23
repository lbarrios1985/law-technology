import React from "react";
import { Typography, Container, Box } from "@mui/material";
import InmobiliariaCards from "./InmobiliariaCards";
import { useTheme } from "@mui/material/styles"; 
const Inmobiliaria = () => {
  const theme = useTheme();

  return (
    <Box
      id="inmobiliaria"
      sx={{
        backgroundColor: theme.palette.grey[100], 
        py: { xs: 6, md: 8 }, 
      }}
    >
      <Container maxWidth="lg"> 
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            color: "#3756a9",
            fontWeight: 700,
            mb: { xs: 4, md: 6 }, 
          }}
        >
          Inmobiliaria
        </Typography>
        <InmobiliariaCards />
      </Container>
    </Box>
  );
};

export default Inmobiliaria;