import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import styles from "./styles.module.css";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', label: <NavLink to="/">Início</NavLink> },
  { key: '2', label: <NavLink to="/personagens">Personagens</NavLink> },
  { key: '3', label: <NavLink to="/planetas">Planetas</NavLink> },
  { key: '4', label: <NavLink to="/naves">Naves</NavLink> },
  { key: '5', label: <NavLink to="/filmes">Filmes</NavLink> },     
];

const MenuMobile: React.FC = () => {

  const [visible, setVisible] = useState(false);

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <>
    {visible ? (
        <CloseOutlined onClick={toggleMenu} className={styles.icon_menu_mobile} />
      ) : (
        <MenuOutlined onClick={toggleMenu} className={styles.icon_menu_mobile} />
      )}
      {visible && (
        <Menu
        onClick={onClick}
        className={styles.menu_mobile}
        mode="inline"
        items={items}
        theme='dark'
      />
      )}
    </>
  );
};

export default MenuMobile;