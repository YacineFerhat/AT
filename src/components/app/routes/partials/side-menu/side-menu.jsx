import React, { useState } from "react";
import "./side-menu.scss";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import HeaderLogo from "components/common/header-logo";
import { Menu } from "static/menu";
import { Link, NavLink, useRouteMatch } from "react-router-dom";

const SideMenu = () => {
  const [idToExpand, setIdToExpand] = useState(0);
  const [idToExpandSub, setIdToExpandSub] = useState(0);
  const [toggleSubMenu, setToggleSubMenu] = useState(false);
  let { path } = useRouteMatch();
  const handleToggleSubMenu = (event) => {
    setToggleSubMenu(!toggleSubMenu);
    setIdToExpand(event);
    setIdToExpandSub(0);
  };

  return (
    <div className="side-menu-main">
      <HeaderLogo />

      <List className="List" component="nav" aria-label="main mailbox folders">
        {Menu.map((sideMenu) => (
          <>
            <ListItem
              className="menu-header"
              onClick={() => handleToggleSubMenu(sideMenu.id)}
              button
              key={sideMenu.id}
            >
              <NavLink
                style={{
                  color: "white",
                  display: "flex",
                  textDecoration: "none",
                  justifyContent: "space-between",
                }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "#176fbd",
                }}
                to={`${path}${sideMenu.link}`}
              >
                <ListItemText primary={sideMenu.title} />
                {toggleSubMenu && sideMenu.subMenu ? (
                  <ExpandLess />
                ) : !toggleSubMenu && sideMenu.subMenu ? (
                  <ExpandMore />
                ) : null}
              </NavLink>
            </ListItem>
            {sideMenu.subMenu &&
              sideMenu.subMenu.map((sub) => (
                <Collapse
                  key={sub.id}
                  in={idToExpand === sideMenu.id && toggleSubMenu}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <NavLink
                      style={{
                        color: "white",
                        textDecoration: "none",
                      }}
                      to={sub.link}
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#176fbd",
                      }}
                    >
                      <ListItem button>
                        <ListItemText primary={sub.title} />
                      </ListItem>{" "}
                    </NavLink>
                  </List>
                </Collapse>
              ))}
          </>
        ))}
      </List>
    </div>
  );
};
export default SideMenu;
