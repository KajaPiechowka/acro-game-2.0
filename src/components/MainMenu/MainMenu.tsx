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

const items: MenuProps["items"] = [
  {
    label: "Acro Game",
    key: "acro-game",
    icon: <MailOutlined />,
  },
  {
    label: "About Acro Yoga",
    key: "about",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Events",
    key: "Teachers",
    icon: <SettingOutlined />,
  },
  {
    label: "Poses",
    key: "alipay",
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
        style={{ minWidth: "50%", backgroundColor: "inherit" }}
      />
    </Header>
  );
};

export default MainMenu;
