import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const TitleCard = ({title, colorClass, descriptionText, linkURL, cardWidth="300px", cardHeight="350px"}) => {
    const { colorMode, setColorMode } = useColorMode();

    const darkMode = () => colorMode === 'dark';
    return (
        <a 
            href={linkURL}
            style={{width: cardWidth, height: cardHeight}}
            className={"title-card " + " " + colorClass}
        >
            <div 
                className="title-card-info"
                style={{color: darkMode() ? 'white' : 'black', background: darkMode() ? '#181818' : 'white'}}
            >
                <h2 
                    className="title"
                >
                    {title}
                </h2>
                <p 
                    className="content"
                >
                    {descriptionText}
                </p>
            </div>
        </a>
  );
};

export default TitleCard;
