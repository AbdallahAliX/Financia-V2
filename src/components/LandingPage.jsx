import React from "react";
import "daisyui/dist/full.css";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import { useAuth } from "../contexts/AuthContext";
import MainNavbar from "./MainNavbar";

function LandingPage() {
  const { currentUser } = useAuth();
  return (
    <div className="font-mono">
      {currentUser ? <MainNavbar /> : <NavBar />}
      <HeroSection />
    </div>
  );
}

export default LandingPage;
