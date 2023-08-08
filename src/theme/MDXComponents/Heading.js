import React from 'react';
import Heading from '@theme/Heading';
import HeaderBackground from '@site/static/img/header-background.png';

export default function MDXHeading(props) {
    if (props.as === 'h1') {
        console.log("----- header props", props);
        return (
            <div className="header__container">
                <h1 className="header__text">
                    {props.children}
                </h1>
                <img className="header__image" src={HeaderBackground} />
            </div>
        )
    }
    return <Heading {...props} />;
}
