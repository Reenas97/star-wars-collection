import { Button } from 'antd';
import styles from './styles.module.css';

interface ButtonProps {
    link: string;
    text: string;
}

const MainButton: React.FC<ButtonProps> = ({ link, text }) => {
    return (
        <Button type="primary" className={styles.button}>
          <a href={link} target="_blank">
            {text}
          </a>
        </Button>
    )
}

export default MainButton