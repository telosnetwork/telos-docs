import React from 'react';
import styles from './card.modules.css';
import { useColorMode } from '@docusaurus/theme-common';

const Card = ({ title, imageUrl, linkUrl }) => {
    const { colorMode, setColorMode } = useColorMode();

    const darkMode = () => colorMode === 'dark';
    return (
        <a href={linkUrl}
            className={styles.card}
            style={{ borderColor: darkMode() ? '#ffffff3D' : '#0000003D'}}
        >
            <img src={imageUrl} className={styles.img} />
            <div
                className={styles.title}
                style={{ color: darkMode() ? '#fff' : '#000'}}
            >{title}</div>
        </a>
    );
};

export default Card;
