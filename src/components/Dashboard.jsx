import React from "react";
import MainNavbar from "./MainNavbar";

export default function Dashboard() {
  return (
    <div className="font-mono static h-dvh">
      <MainNavbar />
      <div className="container mx-auto h-full pt-20">
        <h1 className="text-4xl font-bold text-center">Dashboard</h1>
      </div>
    </div>
  );
}
