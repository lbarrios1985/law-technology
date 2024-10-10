import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material"; // Material UI Icons
import { useSpring, animated } from "react-spring"; // For animations
import { useMediaQuery } from "@mui/material";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control drawer visibility
  const isMobile = useMediaQuery("(max-width: 768px)"); // Media query to check if the screen is mobile-sized

  // Toggle drawer function
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -130; // Altura del AppBar
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false); // Close the drawer after clicking
    }
  };

  // React Spring animation for the logo
  const logoSpring = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 },
  });

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#FFFFFF" }}>
        <Toolbar>
          {/* Logo with react-spring animation */}
          <animated.div style={logoSpring}>
            <img
              src="/Law-Technology.png"
              alt="Law Technology Logo"
              style={logoStyles}
            />
          </animated.div>

          {/* Spacer to push links or hamburger to the right */}
          <div style={{ flexGrow: 1 }} />

          {/* Desktop navigation links */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {[
                "Quiénes Somos",
                "Misión",
                "Visión",
                "Servicios",
                "Contacto",
              ].map((text, index) => (
                <Button
                  key={index}
                  color="inherit"
                  onClick={() => scrollToSection(text)}
                >
                  {text}
                </Button>
              ))}
            </Box>
          )}

          {/* Hamburger icon for mobile view */}
          {isMobile && (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile navigation */}
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
        <IconButton
          onClick={toggleDrawer}
          style={{ alignSelf: "flex-end", margin: "10px" }}
        >
          <CloseIcon />
        </IconButton>
        <List style={{ width: "250px" }}>
          {["Quiénes Somos", "Misión", "Visión", "Servicios", "Contacto"].map(
            (text, index) => (
              <ListItem
                button
                key={index}
                onClick={() => scrollToSection(text)}
              >
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <Box mt={20} />
    </>
  );
};

// Styling for the logo
const logoStyles = {
  height: "85px",
  cursor: "pointer",
};

export default Header;
