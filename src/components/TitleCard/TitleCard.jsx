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
            //style={{zIndex:1, color: darkMode() ? '#ffffff3D' : '#0000003D'}}
        >
            <div 
                className="title-card-info"
                
            >
                <h2 
                    className="title"
                    //style={{ color: darkMode() ? '#fff' : '#000'}}
                >
                    {title}
                </h2>
                <p 
                    className="content"
                    //style={{ color: darkMode() ? '#fff' : '#000'}}
                >
                    {descriptionText}
                </p>
            </div>
        </a>
  );
};

export default TitleCard;
