import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function MainNavbar() {
  const [error, setError] = useState("");
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();
  const { photoURL } = currentUser;

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="navbar bg-primary absolute top-0">
      <div className="flex-1">
        <Link to="/dashboard">
          <button className="btn btn-ghost text-xl text-black">FINANCIA</button>
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full shadow-xl outline outline-black">
              <img alt="Tailwind CSS Navbar component" src={photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/profile">
                <a>Profile</a>
              </Link>
            </li>
            <li>
              <Link to="/Settings">
                <a>Settings</a>
              </Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
              {error && (
                <div role="alert" className="alert border-error">
                  <span className="text-xs opacity-100 text-error">
                    {error}
                  </span>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
