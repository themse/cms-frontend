import React from 'react';
import { VendorList } from '../components/vendor/list';
import { ProductList } from '../components/product/list';
import { Navigation } from '../components/navigation';
import { SlideShow } from '../components/slideshow';

export const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-3 hidden-xs">
                    <Navigation />
                </div>
                <div id="content" className="col-sm-9">
                    <SlideShow />
                    <ProductList />
                    <VendorList />
                </div>
            </div>
        </div>
    );
};
