import React from 'react';


const CompanyCard = ({ appName, logoURL, xURL, websiteURL, appURL, description }) => {
    
    return (
        <div className="app-card-container">
            <div className="app-card">
                <div className="app-img-content">
                    <img src={logoURL}/>
                </div>
                <div className="app-content">
                    <p className="app-heading">{appName}</p>
                    <p className="description">
                        {description}
                    </p>
                </div>
            <div className="app-icons">
                <a href={websiteURL}><img title="Website" className="card-icon" src={require('/static/img/website-icon-white.png').default} /></a>
                <a href={appURL}><img title="Application"className="card-icon" src={require('/static/img/app-icon-white.png').default} /></a>
                <a href={xURL}><img title="X (Twitter)" className="card-icon" src={require('/static/img/x-icon-white.png').default} /></a>
            </div>
        </div>
    </div>
    );
};

export default CompanyCard;
