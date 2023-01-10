import React from "react";
import logo from "./utils/images/logo.png";
import "./App.scss";

function App() {
  return (
    <div className="theme">
      <div className="header">
        <img src={logo} alt="logo" />
      </div>
      <div className="container">
        <h1>Welcome to Acro Game!</h1>
      </div>
      <div className="footer">Social Media</div>
    </div>
  );
}

export default App;
