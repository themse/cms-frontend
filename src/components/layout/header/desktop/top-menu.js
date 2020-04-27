import React from 'react';

export const TopMenu = () => {
    return (
        <nav id="top">
            <div className="container">
                <div className="row">
                    <div className="hidden-xs col-sm-5 col-md-4 col-lg-4 login-register-links">
                        <a href="/">Login</a> or
                        <a href="/">Register</a>, it only takes a few seconds
                    </div>
                    <div className="col-xs-5 col-sm-3 col-md-5 col-lg-6">
                        <ul className="list-unstyled currency-language">
                            <li>
                                <form id="form-currency" className="hidden-xs">
                                    <div className="btn-group">
                                        <button
                                            className="btn btn-link dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            <strong>$</strong>
                                            <span className="hidden-xs hidden-sm hidden-md">
                                                USD
                                            </span>
                                            <i className="hidden-xs fa fa-caret-down"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <button
                                                    className="currency-select btn btn-link btn-block"
                                                    type="button"
                                                    name="EUR"
                                                >
                                                    € Euro
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="currency-select btn btn-link btn-block"
                                                    type="button"
                                                    name="GBP"
                                                >
                                                    £ Pound Sterling
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="currency-select btn btn-link btn-block"
                                                    type="button"
                                                    name="USD"
                                                >
                                                    $ US Dollar
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-7 col-sm-4 col-md-3 col-lg-2">
                        <div className="search-cart">
                            <div className="search">
                                <a href="/" className="toggleSearch">
                                    <i className="fa fa-search" />
                                </a>
                            </div>
                            <div className="cart">
                                <a href="/" className="toggleCart">
                                    Cart<span>0</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
