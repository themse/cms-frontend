import React from "react";

export const MainMenu = () => {
  return (
    <nav id="menu-mobile">
      <div className="container">
        <div className="navbar-header">
          <span id="category">Menu</span>
          <button
            type="button"
            className="btn btn-navbar navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-ex1-collapse"
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </div>
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <div className="container">
          <ul className="nav navbar-nav main-menu">
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
            <li>
              <a
                href="index.php@route=account%252Fpassword.html"
                className="account-menu"
              >
                Account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
