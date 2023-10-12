import React from 'react';

const CompanyCard = ({ appName, logoURL, xURL, websiteURL, description }) => {
    
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
                <a href={websiteURL}><img className="card-icon" src="https://cdn-icons-png.flaticon.com/128/1006/1006771.png" /></a>
                <a href={xURL}><img className="card-icon" src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" /></a>
            </div>
        </div>
    </div>
    );
};

export default CompanyCard;
