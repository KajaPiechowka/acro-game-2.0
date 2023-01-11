import React from "react";
import logo from "./utils/images/logo.png";
import "./App.scss";
import { ConfigProvider, Button } from "antd";
import lightMode from "./styles/theme/lightMode";
import MainMenu from "./components/MainMenu/MainMenu";

function App() {
  return (
    <ConfigProvider theme={lightMode}>
      <div className="theme">
        <MainMenu />
        <div className="header">
          <img src={logo} alt="logo" />
        </div>
        <Button type="primary">Hello</Button>
        <div className="container">
          <h1>Welcome to Acro Game!</h1>
        </div>
        <div className="footer">Social Media</div>
      </div>
    </ConfigProvider>
  );
}

export default App;
