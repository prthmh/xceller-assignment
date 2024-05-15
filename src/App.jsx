import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./App.css";
import chirpBoxLogo from "./assets/chirpBoxlogo.png";
import Navigation from "./assets/components/Navigation";
import MainContent from "./assets/components/MainContent";

const App = () => {
  return (
    <div className="app-container">
      <div className="header">
        <div>
          <img src={chirpBoxLogo} className="logo" />
        </div>
        <h1>Welcome</h1>
      </div>

      <main>
        <Navigation />
        <MainContent />
      </main>
    </div>
  );
};

export default App;
