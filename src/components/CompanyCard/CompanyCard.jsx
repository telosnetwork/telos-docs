import React from 'react';


const CompanyCard = ({ appName, logo, xURL, websiteURL, appURL, description, chain }) => {
    
    return (
        <div 
            className={chain + "-app-card-container"}
            >
            <div className="app-card">
                <div 
                    className={chain +"-app-img-content"}
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
