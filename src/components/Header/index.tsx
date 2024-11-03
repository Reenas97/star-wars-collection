import Menu from "../Menu"
import logo from "../../assets/images/star-wars-logo.png"
import styles from "./styles.module.css"
import MenuMobile from "../MenuMobile"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <header className={`${styles.header} container`}>
            <NavLink to="/">
                <img src={logo} className = {styles.logo} alt="Logo Star Wars Collection" />
            </NavLink>
            {isMobile ? <MenuMobile />: <Menu />}
        </header>
    )
}

export default Header;