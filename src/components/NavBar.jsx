import React from "react";
import "daisyui/dist/full.css";

function NavBar() {
  return (
    <div className="navbar mb-2 shadow-lg bg-primary">
      <div className="flex-1 px-2 mx-2 justify-center">
        <span className="text-2xl font-bold text-black">FINANCIA</span>
      </div>
      <div className="flex-none"></div>
    </div>
  );
}

export default NavBar;
