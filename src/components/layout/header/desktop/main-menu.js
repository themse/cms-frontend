import React from 'react';
import { Link } from 'react-router-dom';

import { logo } from '../../../../common/images';

export const MainMenu = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <div id="logo">
                        <Link to="/">
                            <img
                                src={logo}
                                title="Your Store"
                                alt="Your Store"
                                className="img-responsive"
                            />
                        </Link>
                    </div>
                </div>
                <div className="hidden-sm hidden-xs col-md-9 col-lg-9">
                    <nav id="menu" className="navbar">
                        <div className="navbar-header">
                            <span id="category" className="visible-xs visible-sm">
                                Categories
                            </span>
                            <button
                                type="button"
                                className="btn btn-navbar navbar-toggle"
                                data-toggle="collapse"
                                data-target=".navbar-ex1-collapse"
                            >
                                <i className="fa fa-bars"></i>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav">
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        Desktops
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-inner">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#">PC</a>
                                                </li>
                                                <li>
                                                    <a href="#">Mac</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="#" className="see-all">
                                            Show All Desktops
                                        </a>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        Laptops &amp; Notebooks
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-inner">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#">Macs</a>
                                                </li>
                                                <li>
                                                    <a href="#">Windows</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="#" className="see-all">
                                            Show All Laptops &amp; Notebooks
                                        </a>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        Components
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-inner">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#">Keyboards</a>
                                                </li>
                                                <li>
                                                    <a href="#">Mice and Trackballs</a>
                                                </li>
                                                <li>
                                                    <a href="#">Monitors</a>
                                                </li>
                                                <li>
                                                    <a href="#">Printers</a>
                                                </li>
                                                <li>
                                                    <a href="#">Scanners</a>
                                                </li>
                                                <li>
                                                    <a href="#">Web Cameras</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="#" className="see-all">
                                            Show All Components
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">Tablets</a>
                                </li>
                                <li>
                                    <a href="#">Phones &amp; PDAs</a>
                                </li>
                                <li>
                                    <a href="#">Cameras</a>
                                </li>
                                <li>
                                    <a href="#">MP3 Players</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};
