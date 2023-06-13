import React from "react";
import LandingSection from "../components/HomePage/Landing/LandingSection";
import AboutSection from "../components/HomePage/About/AboutSection";
import ServicesSection from "../components/HomePage/Services/ServicesSection";
import PortfolioSection from "../components/HomePage/Portfolio/PortfolioSection";
import TestimonialsSection from "../components/HomePage/Testimonials/TestimonialsSection";

const HomePage = () => {
  return (
    <main>
      <LandingSection id="#landingSection" />
      <AboutSection id="#aboutSection" />
      <ServicesSection id="#servicesSection" />
      <PortfolioSection id="#portfolioSection" />
      <TestimonialsSection id="#testimonialSection" />
    </main>
  );
};

export default HomePage;
