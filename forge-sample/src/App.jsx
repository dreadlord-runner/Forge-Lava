import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DeploymentPlatform from "./components/DeploymentPlatform";
import WhyForge from "./components/WhyForge";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <DeploymentPlatform />
      <WhyForge />
      <Testimonial />
    </div>
  );
};

export default App;
