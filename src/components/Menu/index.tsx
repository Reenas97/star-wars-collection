import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import React from "react";

// Define a interface para as propriedades
interface LinkProps {
    isActive: boolean;
}

// personagens, planetas, naves e filmes da saga
const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul>
                <li>
                    <NavLink to='/' className={({ isActive }: LinkProps) => (isActive ? styles.active : '')}>
                        Início
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/personagens' className={({ isActive }: LinkProps) => (isActive ? styles.active : '')}>
                        Personagens
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/planetas' className={({ isActive }: LinkProps) => (isActive ? styles.active : '')}>
                        Planetas
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/naves' className={({ isActive }: LinkProps) => (isActive ? styles.active : '')}>
                        Naves
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/filmes' className={({ isActive }: LinkProps) => (isActive ? styles.active : '')}>
                        Filmes
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;