import React from "react";

import "./App.scss";
import { ConfigProvider, Layout } from "antd";
import lightMode from "./styles/theme/lightMode";
import MainMenu from "./components/MainMenu/MainMenu";
import { Footer } from "antd/es/layout/layout";

function App() {
  return (
    <ConfigProvider theme={lightMode}>
      <Layout className="theme">
        <MainMenu />

        <div className="container">
          <h1>Welcome to Acro Game!</h1>
        </div>
        <div className="footer">Social Media</div>
      </Layout>
      <Footer>Social Media etc.</Footer>
    </ConfigProvider>
  );
}

export default App;
