import React from 'react';

type VendorItemProps = {
    name: string;
    slug: string;
    image: string;
};

export const VendorItem: React.FC<VendorItemProps> = ({ name, slug, image }) => {
    return (
        <div className="item text-center">
            <a href={slug}>
                <img src={image} alt={name} className="img-responsive" />
            </a>
        </div>
    );
};
