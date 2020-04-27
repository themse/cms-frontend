import React from 'react';

export const SlideItem = ({ name, image, slug }) => {
    return (
        <div className="item">
            <a href={slug}>
                <img src={image} alt={name} className="img-responsive" />
            </a>
        </div>
    );
};
