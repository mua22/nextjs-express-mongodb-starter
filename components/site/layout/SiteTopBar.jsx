import React from "react";

const SiteTopBar = () => {
  return (
    <div id="topbar" className="dark topbar-fullwidth">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="top-menu">
              <li>
                <a href="#">Phone: +1 (234) 567-890</a>
              </li>
              <li>
                <a href="#">Email: admin@altcabs.co.uk</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 d-none d-sm-block">
            <div className="social-icons social-icons-colored-hover">
              <ul>
                <li className="social-facebook">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="social-twitter">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="social-google">
                  <a href="#">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>
                <li className="social-pinterest">
                  <a href="#">
                    <i className="fab fa-pinterest" />
                  </a>
                </li>
                <li className="social-vimeo">
                  <a href="#">
                    <i className="fab fa-vimeo" />
                  </a>
                </li>
                <li className="social-linkedin">
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li className="social-dribbble">
                  <a href="#">
                    <i className="fab fa-dribbble" />
                  </a>
                </li>
                <li className="social-youtube">
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li className="social-rss">
                  <a href="#">
                    <i className="fa fa-rss" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteTopBar;
