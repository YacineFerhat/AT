import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import "./header-logo.scss";

const HeaderLogo = () => {
  return (
    <div className="header-logo">
      <DashboardIcon className="header-icon" />
      <span className="header-title">AT Dashboard</span>
    </div>
  );
};

export default HeaderLogo;
