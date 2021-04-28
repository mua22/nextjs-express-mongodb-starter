import React from "react";

const SiteFooter = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="widget">
                <div className="widget-title">Cogentro</div>
                <p className="mb-5">
                  <br />
                  All rights reserved. Copyright © 2021.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-3">
                  <div className="widget">
                    <div className="widget-title">Discover</div>
                    <ul className="list">
                      <li>
                        <a href="#">Features</a>
                      </li>
                      <li>
                        <a href="#">Layouts</a>
                      </li>
                      <li>
                        <a href="#">Corporate</a>
                      </li>
                      <li>
                        <a href="#">Updates</a>
                      </li>
                      <li>
                        <a href="#">Pricing</a>
                      </li>
                      <li>
                        <a href="#">Customers</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="widget">
                    <div className="widget-title">Affiliate</div>
                    <ul className="list">
                      <li>
                        <a href="/affiliate-program">What we Offer</a>
                      </li>
                      <li>
                        <a href="/affiliate-program-terms-and-conditions">
                          Terms and Conditions
                        </a>
                      </li>
                      <li>
                        <a href="/affiliate/apply">Apply</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="widget">
                    <div className="widget-title">Pages</div>
                    <ul className="list">
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Shop</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="widget">
                    <div className="widget-title">Support</div>
                    <ul className="list">
                      <li>
                        <a href="#">Help Desk</a>
                      </li>
                      <li>
                        <a href="#">Documentation</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-content">
        <div className="container">
          <div className="copyright-text text-center">
            © 2021 COGENTRO - All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
