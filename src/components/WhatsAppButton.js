import React from "react";
import { Fab, Tooltip, Zoom } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/584247015021", "_blank");
  };

  return (
    <Tooltip
      title="¡Contáctanos por WhatsApp!"
      placement="left"
      TransitionComponent={Zoom}
    >
      <Fab
        color="secondary"
        aria-label="whatsapp"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          backgroundColor: "#25D366", // WhatsApp green
          "&:hover": {
            backgroundColor: "#128C7E", // Darker WhatsApp green
          },
          zIndex: 1000,
        }}
      >
        <WhatsApp />
      </Fab>
    </Tooltip>
  );
};

export default WhatsAppButton;
