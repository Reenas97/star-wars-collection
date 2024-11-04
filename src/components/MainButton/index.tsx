import React from 'react';
import { Button } from 'antd';
import { NavLink } from "react-router-dom";
import styles from './styles.module.css';

interface ButtonProps {
    link: string;
    text: string;
}

const MainButton: React.FC<ButtonProps> = ({ link, text }) => {
    return (
        <Button type="primary" className={styles.button}>
          <NavLink to={link}>
            {text}
          </NavLink>
        </Button>
    )
}

export default MainButton