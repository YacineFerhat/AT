import React from "react";
import "./dash.scss";
import SideMenu from "components/app/routes/partials/side-menu";
import TopBar from "components/app/routes/partials/top-bar";
import MainContent from "components/app/routes/partials/main-content";
import NavBar from "components/app/routes/partials/nav-bar";

const Dash = () => {
  return (
    <section className="main-wrapper">
      <SideMenu />
      <div className="main-content">
        <TopBar />
        <MainContent />
      </div>
    </section>
  );
};

export default Dash;
