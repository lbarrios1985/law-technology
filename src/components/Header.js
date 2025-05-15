import React, { useState, useEffect } from "react";
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
  Container,
  ListItemIcon,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Group as GroupIcon,
  Assignment as AssignmentIcon,
  Business as BusinessIcon,
  ContactMail as ContactMailIcon,
} from "@mui/icons-material";
import { useSpring, animated } from "react-spring";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const logoSpring = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 },
  });

  const navigationItems = [
    { text: "Quiénes Somos", icon: <BusinessIcon />, id: "about" },
    { text: "Nuestro Equipo", icon: <GroupIcon />, id: "team" },
    { text: "Servicios", icon: <AssignmentIcon />, id: "services" },
    { text: "Inmobiliaria", icon: <BusinessIcon />, id: "inmobiliaria" },
    { text: "Casos de Éxito", icon: <AssignmentIcon />, id: "success-cases" },
    { text: "Contacto", icon: <ContactMailIcon />, id: "contact" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.98)"
            : "transparent",
          boxShadow: scrolled ? "0 2px 8px rgba(139, 31, 44, 0.08)" : "none",
          transition: "all 0.3s ease-in-out",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid" : "none",
          borderColor: "rgba(139, 31, 44, 0.1)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <animated.div style={logoSpring}>
              <img
                src="/Law-Technology.png"
                alt="Law Technology Logo"
                style={logoStyles}
                onClick={() => navigate("/")}
              />
            </animated.div>

            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "center",
                  flexGrow: 1,
                  ml: 4,
                }}
              >
                {navigationItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    sx={{
                      color: theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: "rgba(26, 35, 126, 0.08)",
                      },
                    }}
                    startIcon={item.icon}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            )}

            {isMobile && (
              <IconButton
                edge="end"
                onClick={toggleDrawer}
                sx={{ color: theme.palette.primary.main }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navigationItems.map((item) => (
            <ListItem
              button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(26, 35, 126, 0.08)",
                },
              }}
            >
              <ListItemIcon sx={{ color: theme.palette.primary.main }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ color: theme.palette.primary.main }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={{ height: { xs: 60, md: 70 } }} />
    </>
  );
};

const logoStyles = {
  height: "70px",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  filter: "drop-shadow(0 4px 6px rgba(139, 31, 44, 0.1))",
  "@media (max-width: 900px)": {
    height: "60px",
  },
  "@media (max-width: 600px)": {
    height: "50px",
  },
  "&:hover": {
    transform: "scale(1.05)",
    filter: "drop-shadow(0 6px 8px rgba(139, 31, 44, 0.2))",
  },
};

export default Header;
