import React, { useState } from "react";
import "./MainMenu.scss";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import logo from "../../utils/images/logo.png";
import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: <Link to="/">Acro Game</Link>,
    key: "acro-game",
    icon: <MailOutlined />,
  },
  {
    label: <Link to="/about">About Acro Yoga</Link>,
    key: "about",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link to="/events">Events</Link>,
    key: "events",
    icon: <SettingOutlined />,
  },
  {
    label: <Link to="/poses">Poses</Link>,
    key: "poses",
    icon: <SettingOutlined />,
  },
];

const MainMenu: React.FC = () => {
  const [current, setCurrent] = useState("acro-game");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Header className="header">
      <img src={logo} alt="logo" className="logo" />
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{ minWidth: "50%", backgroundColor: "inherit", color: "white" }}
      />
    </Header>
  );
};

export default MainMenu;
