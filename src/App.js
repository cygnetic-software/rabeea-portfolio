import React from "react";
import Layout from "./layout/Layout";
import LandingSection from "./components/HomePage/Landing/LandingSection";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default App;
