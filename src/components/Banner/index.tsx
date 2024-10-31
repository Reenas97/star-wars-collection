import styles from './styles.module.css';

interface BannerProps {
    image: string;
    alt: string;
}

const Banner: React.FC<BannerProps> = ({ image, alt }) => {
    return (
        <img src={image} alt={alt} className={`${styles.banner} container margint_default`} />
    );
};

export default Banner;