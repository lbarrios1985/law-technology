// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D4AF37", // Gold
    },
    text: {
      primary: "#000000", // Black for text
      secondary: "#333333", // Dark Gray for secondary text
    },
    background: {
      default: "#FFFFFF", // White for main background
      paper: "#F5F5F5", // Light Gray for paper surfaces
    },
    action: {
      active: "#D4AF37", // Use gold for active elements if needed
    },
  },
});

export default theme;
