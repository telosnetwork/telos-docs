import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const Card = ({ title, imageUrl, linkUrl, descriptionText, animateContent = true }) => {
    const { colorMode, setColorMode } = useColorMode();

    const darkMode = () => colorMode === 'dark';
    return (
        <a href={linkUrl}
            className="card"
            style={{ borderColor: darkMode() ? '#ffffff3D' : '#0000003D'}}
        >
            <img alt="card image" src={imageUrl} className={`card__img ${animateContent ? 'card__img--animation' : ''}`} />
            <div className={`card__content ${animateContent ? 'card__content--animation' : ''}`}>
                <div
                    className="card__title"
                    style={{ color: darkMode() ? '#fff' : '#000'}}
                >{title}</div>
                <div
                    className="card__description"
                    style={{ color: darkMode() ? '#fff' : '#000'}}
                >
                    {descriptionText}
                </div>
            </div>
        </a>
    );
};

export default Card;
