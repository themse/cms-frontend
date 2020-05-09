import React from 'react';
import { FunctionalPage } from '../common/types';
import { VendorList } from '../components/vendor/list';
import { ProductList } from '../components/product/list';
import { Navigation } from '../components/navigation';
import { SlideShow } from '../components/slideshow';

type HomeProps = {};

export const HomePage: FunctionalPage<HomeProps> = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-3 hidden-xs">
                    <Navigation />
                </div>
                <div id="content" className="col-sm-9">
                    <SlideShow />
                    <h3 className="rc-heading margin-top-forty margin-bottom-thirty">Featured</h3>
                    <ProductList />
                    <VendorList />
                </div>
            </div>
        </div>
    );
};
