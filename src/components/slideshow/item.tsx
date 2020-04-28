import React from 'react';

type SlideItemProps = {
    name: string;
    image: string;
    slug: string;
};

export const SlideItem: React.FC<SlideItemProps> = ({ name, image, slug }) => {
    return (
        <div className="item">
            <a href={slug}>
                <img src={image} alt={name} className="img-responsive" />
            </a>
        </div>
    );
};
