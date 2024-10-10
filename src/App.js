import React from "react";
import "./styles/styles.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
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
      <Header />
      <Hero />
      <AboutUs />
      <MissionVision />
      <Services />
      <SuccessCases />
      <SubscriptionForm />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
