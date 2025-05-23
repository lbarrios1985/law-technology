// App.js
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import theme from "./theme";
import "./styles/styles.css";

import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Members from "./components/Members";
import Services from "./components/Services";
import SuccessCase from "./components/SuccessCase";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import SEO from "./components/SEO";
import Inmobiliaria from "./components/Inmobiliaria";
import InmobiliariaApartamentos from "./components/InmobiliariaApartamentos";
import InmobiliariaCasas from "./components/InmobiliariaCasas";
import InmobiliariaLocales from "./components/InmobiliariaLocales";
import InmobiliariaTerrenos from "./components/InmobiliariaTerrenos";
import LocalDetails from "./components/localdetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SEO />
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AboutUs />
                  <Members />
                  <Services />
                  <Inmobiliaria />
                  <SuccessCase />
                  <ContactSection />
                </>
              } 
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/members" element={<Members />} />
            <Route path="/services" element={<Services />} />
            <Route path="/success" element={<SuccessCase />} />
            <Route path="/contact" element={<ContactSection />} />
            {/* Rutas de Inmobiliaria */}
            <Route path="/inmobiliaria/apartamentos" element={<InmobiliariaApartamentos />} />
            <Route path="/inmobiliaria/casas" element={<InmobiliariaCasas />} />
            <Route path="/inmobiliaria/locales" element={<InmobiliariaLocales />} />
            <Route path="/inmobiliaria/terrenos" element={<InmobiliariaTerrenos />} />

     {/* Nueva ruta para los detalles de la inmobiliaria */}
     <Route path="/inmobiliaria/locales/:id" element={<LocalDetails />} />


            {/* Puedes agregar más rutas si necesitas */}
            <Route path="*" element={<NotFound />} />
          </Routes>
            <Footer />
          <WhatsAppButton />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
