import React from 'react';
import Heading from '@theme/Heading';
import HeaderBackgroundDark from '@site/static/img/header-background-dark.png';
import HeaderBackgroundLight from '@site/static/img/header-background-light.png';
import ThemedImage from '@theme/ThemedImage';

export default function MDXHeading(props) {
    if (props.as === 'h1') {
        console.log("----- header props", props);
        return (
            <div className="header__container">
                <h1 className="header__text">
                    {props.children}
                </h1>
                <ThemedImage
                    className="header__image"
                    alt="banner"
                    sources={{
                        light: HeaderBackgroundLight,
                        dark: HeaderBackgroundDark,
                    }}
                />
                
            </div>
        )
    }
    return <Heading {...props} />
}
