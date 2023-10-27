import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import ThemedImage from '@theme/ThemedImage';

import styles from './attribute.module.scss';

const Attribute = ({ imgUrl, imgAlt, title, text }) => {
    return (
        <div className={styles.attribute}>
            <ThemedImage
                alt={imgAlt}
                sources={{
                    light: imgUrl.light,
                    dark: imgUrl.dark,
                }}
                className={styles.attribute__svg}
            />
            <h3 className={styles.attribute__title}>{title}</h3>
            <p className={styles.attribute__text}>{text}</p>
        </div>
    );
};

export default Attribute;
