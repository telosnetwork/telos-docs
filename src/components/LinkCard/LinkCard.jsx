import React from 'react';

const Card = ({ logo, title, url }) => {
    return (
        <a 
            target="_blank"
            href={url}
        >
            <div className="link-card">
                <div className="link-card-info">
                    <img src={logo}/>
                    <p className="link-card-title">{title}</p>
                </div>
            </div>
      </a>
    );
};

export default Card;