import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; // Adjust the import path as needed
import "./styles/styles.css";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Members from "./components/Members";
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
        <AboutUs />
        <Members />
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
