import React from "react";

import "./App.scss";
import { ConfigProvider, Layout } from "antd";
import lightMode from "./styles/theme/lightMode";
import MainMenu from "./components/MainMenu/MainMenu";
import { Footer } from "antd/es/layout/layout";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import MainPage from "./pages/MainPage/MainPage";
import GeneratedPage from "./pages/GeneratedPage/GeneratedPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PosesPage from "./pages/PosesPage/PosesPage";

function App() {
  return (
    <ConfigProvider theme={lightMode}>
      <Layout className="theme">
        <BrowserRouter>
          <MainMenu />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/generated" element={<GeneratedPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/poses" element={<PosesPage />} />
          </Routes>
        </BrowserRouter>
        <div className="footer">Social Media</div>
        <Footer>Social Media etc.</Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
