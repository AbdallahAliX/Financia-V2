import React from "react";
import "daisyui/dist/full.css";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";

function LandingPage() {
  return (
    <div className="font-mono">
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default LandingPage;
