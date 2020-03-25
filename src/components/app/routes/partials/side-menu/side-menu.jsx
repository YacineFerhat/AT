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
import { Link } from "react-router-dom";

const SideMenu = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [toggleSubMenu, setToggleSubMenu] = useState(false);
  const [subMenuToToggle, setSubMenuToToggle] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleToggleSubMenu = () => {
    setToggleSubMenu(!toggleSubMenu);
  };
  return (
    <div className="side-menu-main">
      <HeaderLogo />

      <List className="List" component="nav" aria-label="main mailbox folders">
        {Menu.map(sideMenu => (
          <>
            <ListItem
              className="menu-header"
              onClick={handleToggleSubMenu}
              button
              key={sideMenu.id}
            >
              <ListItemText primary={sideMenu.title} />
              {toggleSubMenu ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {sideMenu.subMenu.map(sub => (
              <Collapse
                key={sub.id}
                in={toggleSubMenu}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <Link className="link" to={sub.link}>
                    <ListItem button>
                      <ListItemText primary={sub.title} />
                    </ListItem>
                  </Link>
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

/*
<div className="side-menu-main">
      
    </div>*/
