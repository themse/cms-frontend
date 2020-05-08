import React from 'react';
import { Link } from 'react-router-dom';

import { logo } from '../../../../common/images';

type MainMenuProps = {};

export const MainMenu: React.FC<MainMenuProps> = () => {
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
                                    <Link to="/" className="dropdown-toggle" data-toggle="dropdown">
                                        Desktops
                                    </Link>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-inner">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <Link to="/">PC</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Mac</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <Link to="/" className="see-all">
                                            Show All Desktops
                                        </Link>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <Link to="/" className="dropdown-toggle" data-toggle="dropdown">
                                        Laptops &amp; Notebooks
                                    </Link>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-inner">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <Link to="/">Macs</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Windows</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <Link to="/" className="see-all">
                                            Show All Laptops &amp; Notebooks
                                        </Link>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <Link to="/" className="dropdown-toggle" data-toggle="dropdown">
                                        Components
                                    </Link>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-inner">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <Link to="/">Keyboards</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Mice and Trackballs</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Monitors</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Printers</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Scanners</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Web Cameras</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <Link to="/" className="see-all">
                                            Show All Components
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/">Tablets</Link>
                                </li>
                                <li>
                                    <Link to="/">Phones &amp; PDAs</Link>
                                </li>
                                <li>
                                    <Link to="/">Cameras</Link>
                                </li>
                                <li>
                                    <Link to="/">MP3 Players</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};
