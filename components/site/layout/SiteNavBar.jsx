import React from "react";
import Link from "next/link";
const SiteNavBar = () => {
  return (
    <header id="header" className="light" data-fullwidth="true">
      <div className="header-inner">
        <div className="container">
          {/*Logo*/}
          <div id="logo">
            <a href="index.html">
              <span className="logo-default">Cogentro</span>
              <span className="logo-dark">Cogentro</span>
            </a>
          </div>

          <div id="mainMenu-trigger">
            <a className="lines-button x">
              <span className="lines" />
            </a>
          </div>
          {/*end: Navigation Resposnive Trigger*/}
          {/*Navigation*/}
          <div id="mainMenu">
            <div className="container">
              <nav>
                <ul>
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>

                  <li className="dropdown">
                    <a href="#">Drop Down menu</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="/">Link One</a>
                      </li>
                      <li>
                        <a href="/">Link Two</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/login">
                      <a>Login</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/*end: Navigation*/}
        </div>
      </div>
    </header>
  );
};

export default SiteNavBar;
