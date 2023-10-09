import React from 'react';
//import { useColorMode } from '@docusaurus/theme-common';

const TitleCard = ({title, colorClass, descriptionText, linkURL}) => {
    //const { colorMode, setColorMode } = useColorMode();

    //const darkMode = () => colorMode === 'dark';
    return (
        <a 
            href={linkURL}
            className={"title-card " + " " + colorClass}>
            <div className="title-card-info">
                <h2 className="title">{title}</h2>
                <p className="content">{descriptionText}</p>
            </div>
        </a>
  );
};

export default TitleCard;
