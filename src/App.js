import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; // Adjust the import path as needed
import "./styles/styles.css";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import MissionVision from "./components/MissionVision";
import Services from "./components/Services";
import SuccessCases from "./components/SuccessCases";
import SubscriptionForm from "./components/SuscriptionForm";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        {/* <Hero /> */}
        <AboutUs />
        <MissionVision />
        <Services />
        <SuccessCases />
        <SubscriptionForm />
        <ContactSection />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
