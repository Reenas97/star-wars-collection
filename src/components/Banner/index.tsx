import React from 'react';
import styles from './styles.module.css';

interface BannerProps {
    image: string;
    alt: string;
}

const Banner: React.FC<BannerProps> = ({ image, alt }) => {
    return (
        <img src={image} alt={alt} className={`${styles.banner} container margint_default marginb_default`} />
    );
};

export default Banner;