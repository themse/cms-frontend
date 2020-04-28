import React from 'react';

type TopMenuProps = {};

export const TopMenu: React.FC<TopMenuProps> = () => {
    return (
        <nav id="top-mobile">
            <div className="currency">
                <select id="currencySwitch" className="visible-xs">
                    <option value="EUR">Euro</option>
                    <option value="GBP">Pound Sterling</option>
                    <option value="USD" selected={true}>
                        US Dollar
                    </option>
                </select>
                <a href="/" className="visible-xs toggleCurrencySwitch top-link">
                    $
                </a>
            </div>
            <div className="search">
                <a href="/" className="toggleSearch top-link">
                    <i className="fa fa-search" />
                </a>
            </div>
            <div className="cart">
                <a href="/" className="toggleCart top-link">
                    <i className="fa fa-shopping-cart" />
                </a>
            </div>
        </nav>
    );
};
