import React from "react";
import "daisyui/dist/full.css";
import LandingPage from "./components/LandingPage";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Starfield from "react-starfield";

function App() {
  return (
    <Router>
      <Starfield
        starCount={10000}
        starColor={[0, 169, 183]}
        speedFactor={0.1}
        backgroundColor="black"
      />
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
