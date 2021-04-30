import React, { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import SideMenu from "components/app/routes/partials/side-menu";
import SideMenuMobile from "components/app/routes/partials/side-menu-mobile";
import TopBar from "components/app/routes/partials/top-bar";
import MainContent from "components/app/routes/partials/main-content";
import Dashboard from "components/app/routes/main/dashboard";
import Metrique from "components/app/routes/main/metrique";
import Cluster from "components/app/routes/main/cluster";
import "./dash.scss";

const Dash = () => {
  let { path } = useRouteMatch();
  const mediaMatch = window.matchMedia("(min-width: 765px)");
  const [matches, setMatches] = useState(mediaMatch.matches);
  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  let nav = matches ? <SideMenu /> : <SideMenuMobile />;
  return (
    <section className="main-wrapper">
      {nav}
      <div className="main-content">
        <TopBar />
        <Switch>
          <Route exact path={path}>
            <Dashboard />
          </Route>
          <Route path={`${path}/Metriques`}>
            <Metrique />
          </Route>
          <Route path={`${path}/Clusters`}>
            <Cluster />
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default Dash;
