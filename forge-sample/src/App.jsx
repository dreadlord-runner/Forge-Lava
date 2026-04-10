import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DeploymentPlatform from "./components/DeploymentPlatform";
import WhyForge from "./components/WhyForge";
import Testimonial from "./components/Testimonial";
import LaravelVPS from "./components/LaravelVPS";

const App = () => {
  return (
    <div className="min-h-scren bg-white">
      <Navbar />
      <Hero />
      <DeploymentPlatform />
      <WhyForge />
      <Testimonial />
      <LaravelVPS />
    </div>
  );
};

export default App;
