import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DeploymentPlatform from "./components/DeploymentPlatform";
import WhyForge from "./components/WhyForge";
import Testimonial from "./components/Testimonial";
import LaravelVPS from "./components/LaravelVPS";
import FeaturesThatMatter from "./components/FeaturesThatMatter";
import BuildForDevelopers from "./components/BuildForDevelopers";
import GlobeStats from "./components/GlobeStats";
import Monitoring from "./components/Monitoring";
import Footer from "./components/Footer";
import Faq from "./components/Faq";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <DeploymentPlatform />
      <WhyForge />
      <Testimonial />
      <LaravelVPS />
      <FeaturesThatMatter />
      <BuildForDevelopers />
      <GlobeStats />

      <Monitoring />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
