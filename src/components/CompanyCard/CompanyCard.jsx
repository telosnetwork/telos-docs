import React from 'react';


const CompanyCard = ({ appName, logo, xURL, websiteURL, appURL, description, chain }) => {
    
    var cardContainer
    var cardContent
    if (chain == 'evm') {
        cardContainer = "evm-app-card-container"
        cardContent = "evm-app-img-content"
    }
    else if (chain == 'zero') {
        cardContainer = "zero-app-card-container"
        cardContent = "zero-app-img-content"
    }
    else {
        cardContainer = "default-app-card-container"
        cardContent = "default-app-img-content"
    }

    return (
        <div 
            className={cardContainer}
            >
            <div className="app-card">
                <div 
                    className={cardContent}
                    >
                    <img src={logo}/>
                    <img className="corner-image" src={require('/static/img/logos/telos-' + chain + '.png').default} />
                </div>
                <div className="app-content">
                    <p className="app-heading">{appName}</p>
                    <p className="description">
                        {description}
                    </p>
                </div>
            <div className="app-icons">
                <a target="_blank" href={websiteURL}><img title="Website" className="card-icon" src={require('/static/img/website-icon-white.png').default} /></a>
                <a target="_blank" href={appURL}><img title="Application"className="card-icon" src={require('/static/img/app-icon-white.png').default} /></a>
                <a target="_blank" href={xURL}><img title="X (Twitter)" className="card-icon" src={require('/static/img/x-icon-white.png').default} /></a>
            </div>
        </div>
    </div>
    );
};

export default CompanyCard;
