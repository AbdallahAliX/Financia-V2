import React from "react";
import "daisyui/dist/full.css";
import LoginModal from "./LoginModal";

function NavBar() {
  return (
    <div className="navbar mb-2 shadow-lg bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="flex-1 px-2 mx-2">
        <span className="text-2xl font-bold text-black">FINANCIA</span>
      </div>
      <div className="flex-none">
        <LoginModal />
      </div>
    </div>
  );
}

export default NavBar;
