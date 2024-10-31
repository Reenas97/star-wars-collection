import React, { useState } from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import styles from "./styles.module.css";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', label: 'Início' },
  { key: '2', label: 'Personagens' },
  { key: '3', label: 'Planetas' },
  { key: '4', label: 'Naves' },
  { key: '5', label: 'Filmes' }      
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