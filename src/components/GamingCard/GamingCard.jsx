import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const GamingCard = ({ gameTitle, chain, descriptionText, mediaUrl, mediaType, website, nftPage, elixirPage }) => {
    const { colorMode, setColorMode } = useColorMode();

    const darkMode = () => colorMode === 'dark';
    const cardClass = chain === 'zero' ? 'gaming-main-card zero' : 'gaming-main-card';
    
    return (
        <div className={cardClass}>
            <div className='smaller-box'
                style={{color: darkMode() ? 'white' : 'black', background: darkMode() ? '#181818' : 'white'}}
            > 
                <div className="gaming-box-title">
                    <h2>{gameTitle}</h2>
                    <div className='links'>
                        <a target="_blank" href={website}><img src={require('/static/img/logos/website-icon.png').default} alt="Website Icon" />Website</a>
                        <a target="_blank" href={nftPage}><img src={require('/static/img/logos/altura.png').default} alt="NFT Page Icon" />NFT Collections</a>
                        <a target="_blank" href={elixirPage}><img src={require('/static/img/logos/elixir.png').default} alt="Elixir Page Icon" />Elixir Page</a>
                    </div>
                    <div className='logos'>
                        <img src={require('/static/img/logos/telos-' + chain + '.png').default} />
                    </div>
                </div>
                <div className="gaming-box-description">
                    <h3>About</h3>
                    <p>{descriptionText}</p>
                </div>
                <div className="gaming-box-video">
                    {mediaType === 'video' ? (
                        <iframe src={mediaUrl} title="Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    ) : (
                        <img src={mediaUrl} alt="Game media" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default GamingCard;
