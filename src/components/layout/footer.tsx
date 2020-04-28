import React from 'react';

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
                                <a href="index.php@route=information%252Finformation&amp;information_id=4.html">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="index.php@route=information%252Finformation&amp;information_id=6.html">
                                    Delivery Information
                                </a>
                            </li>
                            <li>
                                <a href="index.php@route=information%252Finformation&amp;information_id=3.html">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="index.php@route=information%252Finformation&amp;information_id=5.html">
                                    Terms &amp; Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>Customer Service</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="index.php@route=information%252Fcontact.html">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="index.php@route=account%252Freturn%252Fadd.html">
                                    Returns
                                </a>
                            </li>
                            <li>
                                <a href="index.php@route=information%252Fsitemap.html">Site Map</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>Extras</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="index.php@route=product%252Fmanufacturer.html">Brands</a>
                            </li>
                            <li>
                                <a href="index.php@route=account%252Fvoucher.html">
                                    Gift Certificates
                                </a>
                            </li>
                            <li>
                                <a href="index.php@route=affiliate%252Faccount.html">Affiliates</a>
                            </li>
                            <li>
                                <a href="index.php@route=product%252Fspecial.html">Specials</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>My Account</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="index.php@route=account%252Faccount.html">My Account</a>
                            </li>
                            <li>
                                <a href="index.php@route=account%252Forder.html">Order History</a>
                            </li>
                            <li>
                                <a href="index.php@route=account%252Fwishlist.html">Wish List</a>
                            </li>
                            <li>
                                <a href="index.php@route=account%252Fnewsletter.html">Newsletter</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="copyrights">
                    Powered By <a href="http://www.opencart.com">OpenCart</a>
                    <br /> Your Store &copy; 2020
                </p>
            </div>
        </footer>
    );
};
