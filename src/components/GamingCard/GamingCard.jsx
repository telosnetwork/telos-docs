import React from 'react';

const GamingCard = ({ gameTitle, elixirLogo, chainLogo, descriptionHeading, descriptionText, videoUrl, website, nftPage, elixirPage }) => {
    return (
        <div className="gaming-main-card">
            <div className='smaller-box'>
                <div className="gaming-box-title">
                    <h2>{gameTitle}</h2>
                    <div className='links'>
                        <a target="_blank" href={website}><img src={require('/static/img/logos/website-icon.png').default} alt="Website Icon" />Website</a>
                        <a target="_blank" href={nftPage}><img src={require('/static/img/logos/altura.png').default} alt="NFT Page Icon" />NFT Collections</a>
                        <a target="_blank" href={elixirPage}><img src={elixirLogo} alt="Elixir Page Icon" />Elixir Page</a>
                    </div>
                    <div className='logos'>
                        <img src={chainLogo} />
                    </div>
                </div>
                <div className="gaming-box-description">
                    <h3>{descriptionHeading}</h3>
                    <p>{descriptionText}</p>
                </div>
                <div className="gaming-box-video">
                    <iframe src={videoUrl} title="Nope" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
        </div>
    );
};

export default GamingCard;
