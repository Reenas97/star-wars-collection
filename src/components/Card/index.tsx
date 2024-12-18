import React from "react";
import styles from "./styles.module.css";

interface CardProps {
    name: string;
    homeworld?: string;
    imageUrl: string;
    link: () => void;
}

const Card: React.FC<CardProps> = ({ name, homeworld, imageUrl, link }) => {
    return (
      <div className={styles.card} onClick={link}>
        <img src={imageUrl} alt={name} className={styles.card_image} />
        <h3 className={styles.card_title}>{name}</h3>
        {homeworld ?(
            <p className={styles.aditional_info}>Planeta Natal: {homeworld}</p>
            ) : 
        null}
      </div>
    );
};

export default Card;