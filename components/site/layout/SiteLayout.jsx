import React from "react";
import SiteFooter from "./SiteFooter";
import SiteNavBar from "./SiteNavBar";
import SiteTopBar from "./SiteTopBar";

const SiteLayout = ({ children }) => {
  return (
    <div className="body-inner">
      <SiteTopBar />
      <SiteNavBar />
      {children}
      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
