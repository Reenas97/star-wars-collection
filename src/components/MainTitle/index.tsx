import styles from './styles.module.css';

interface MainTitleProps {
    text: string;
}

const MainTitle: React.FC<MainTitleProps> = ({ text }) => {
    return (
        <h2 className={styles.main_title}>{text}</h2>
    );
};

export default MainTitle;