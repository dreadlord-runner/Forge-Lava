import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DeploymentPlatform from "./components/DeploymentPlatform";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <DeploymentPlatform />
    </div>
  );
};

export default App;
