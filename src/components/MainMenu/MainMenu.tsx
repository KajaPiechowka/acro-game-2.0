import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Layout } from "antd";

const { Sider } = Layout;

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
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="vertical"
        inlineCollapsed={collapsed}
        items={items}
      />
    </Sider>
  );
};

export default MainMenu;
