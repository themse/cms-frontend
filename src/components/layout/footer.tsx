import React from 'react';
import { Link } from 'react-router-dom';

type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <h5>Information</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/delivery-information">Delivery Information</Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/term-conditions">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>Customer Service</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/contact-us">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/returns">Returns</Link>
                            </li>
                            <li>
                                <Link to="/site-map">Site Map</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>Extras</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/brands">Brands</Link>
                            </li>
                            <li>
                                <Link to="/certificates">Gift Certificates</Link>
                            </li>
                            <li>
                                <Link to="/affiliates">Affiliates</Link>
                            </li>
                            <li>
                                <Link to="/specials">Specials</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>My Account</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/profile">My Account</Link>
                            </li>
                            <li>
                                <Link to="/order-history">Order History</Link>
                            </li>
                            <li>
                                <Link to="/wishlist">Wish List</Link>
                            </li>
                            <li>
                                <Link to="/newsletter">Newsletter</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="copyrights">
                    Powered By <b>Themse</b>
                    <br /> Your Store &copy; 2020
                </p>
            </div>
        </footer>
    );
};
