import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D4AF37", // Gold
    },
    text: {
      primary: "#000000", // Black
      secondary: "#333333", // Dark Gray
    },
    background: {
      default: "#FFFFFF", // White
      paper: "#F5F5F5", // Light Gray
    },
    action: {
      active: "#D4AF37", // Gold for active elements
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "600",
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

export default theme;
