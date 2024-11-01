import styles from './styles.module.css';

interface MainTitlePages {
    text: string;
}

const MainTitlePages: React.FC<MainTitlePages> = ({ text }) => {
    return (
        <h1 className={styles.main_title}>{text}</h1>
    );
};

export default MainTitlePages;