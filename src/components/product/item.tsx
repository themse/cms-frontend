import React from 'react';

type ProductItemProps = {
    name: string;
    slug: string;
    image: string;
    price: any;
    tax: any;
};

export const ProductItem: React.FC<ProductItemProps> = ({ name, slug, image, price, tax }) => {
    return (
        <div className="product-layout col-lg-3 col-md-3 col-sm-4 col-xs-12">
            <div className="product-thumb transition">
                <div className="image">
                    <a href={slug}>
                        <img src={image} alt={name} title={name} className="img-responsive" />
                    </a>
                </div>
                <div className="caption">
                    <h4>
                        <a href={slug}>{name}</a>
                    </h4>
                    <p className="price">
                        {price} <span className="price-tax">Ex Tax: {tax}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
