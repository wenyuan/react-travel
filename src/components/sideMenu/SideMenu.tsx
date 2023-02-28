import React from "react";
import { Menu } from 'antd';
import { GifOutlined } from "@ant-design/icons";
import styles from "./SideMenu.module.css"
import { sideMenuList } from "./mockup";

export const SideMenu: React.FC = () => {
  return (
    <Menu mode={"vertical"} className={styles["side-menu"]}
      items={sideMenuList.map((m) => ({
        label: m.title,
        icon: <GifOutlined/>,
        key: m.title,
        children: m.subMenu.map((sm) => ({
          label: sm.title,
          key: sm.title,
          icon: <GifOutlined/>,
          children: sm.subMenu.map((sms) => ({
            label: sms,
            key: sms,
            icon: <GifOutlined/>,
          })),
        })),
      }))}
    ></Menu>
  );
};