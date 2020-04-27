import React from "react";

import { logo } from "../../../../common/images";

export const MainMenu = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <div id="logo">
            <a href="/">
              <img
                src={logo}
                title="Your Store"
                alt="Your Store"
                className="img-responsive"
              />
            </a>
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
                  <a
                    href="index.php@route=product%252Fcategory&amp;path=20.html"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Desktops
                  </a>
                  <div className="dropdown-menu">
                    <div className="dropdown-inner">
                      <ul className="list-unstyled">
                        <li>
                          <a href="index.php@route=product%252Fcategory&amp;path=20_26.html">
                            PC
                          </a>
                        </li>
                        <li>
                          <a href="index.php@route=product%252Fcategory&amp;path=20_27.html">
                            Mac
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="index.php@route=product%252Fcategory&amp;path=20.html"
                      className="see-all"
                    >
                      Show All Desktops
                    </a>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    href="index.php@route=product%252Fcategory&amp;path=18.html"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Laptops &amp; Notebooks
                  </a>
                  <div className="dropdown-menu">
                    <div className="dropdown-inner">
                      <ul className="list-unstyled">
                        <li>
                          <a href="index.php@route=product%252Fcategory&amp;path=18_46.html">
                            Macs
                          </a>
                        </li>
                        <li>
                          <a href="index.php@route=product%252Fcategory&amp;path=18_45.html">
                            Windows
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="index.php@route=product%252Fcategory&amp;path=18.html"
                      className="see-all"
                    >
                      Show All Laptops &amp; Notebooks
                    </a>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    href="index.php@route=product%252Fcategory&amp;path=25.html"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Components
                  </a>
                  <div className="dropdown-menu">
                    <div className="dropdown-inner">
                      <ul className="list-unstyled">
                        <li>
                          <a href="index.php@route=product%252Fcategory&amp;path=25_59.html">
                            Keyboards
                          </a>
                        </li>
                        <li>
                          <a href="index.php@route=product%252Fcategory&amp;path=25_29.html">
                            Mice and Trackballs
                          </a>
                        </li>
                        <li>
                          <a href="index.php@route=product%252Fcategory&amp;path=25_28.html">
                            Monitors
                          </a>
                        </li>
                        <li>
                          <a href="index.php@route=product%252Fcategory&amp;path=25_30.html">
                            Printers
                          </a>
                        </li>
                        <li>
                          <a href="index.php@route=product%252Fcategory&amp;path=25_31.html">
                            Scanners
                          </a>
                        </li>
                        <li>
                          <a href="index.php@route=product%252Fcategory&amp;path=25_32.html">
                            Web Cameras
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="index.php@route=product%252Fcategory&amp;path=25.html"
                      className="see-all"
                    >
                      Show All Components
                    </a>
                  </div>
                </li>
                <li>
                  <a href="index.php@route=product%252Fcategory&amp;path=57.html">
                    Tablets
                  </a>
                </li>
                <li>
                  <a href="index.php@route=product%252Fcategory&amp;path=24.html">
                    Phones &amp; PDAs
                  </a>
                </li>
                <li>
                  <a href="index.php@route=product%252Fcategory&amp;path=33.html">
                    Cameras
                  </a>
                </li>
                <li>
                  <a href="index.php@route=product%252Fcategory&amp;path=34.html">
                    MP3 Players
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
