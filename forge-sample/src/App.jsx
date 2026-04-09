import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DeploymentPlatform from "./components/DeploymentPlatform";
import WhyForge from "./components/WhyForge";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <DeploymentPlatform />
      <WhyForge />
    </div>
  );
};

export default App;
