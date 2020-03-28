import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import PersonIcon from "@material-ui/icons/Person";
import { MenuData } from "./top-bar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#131b31",
    height: "40px",
    justifyContent: "flex-end"
  },
  userName: {
    margin: "1rem"
  }
}));

export default function TopBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />{" "}
            <Typography className={classes.userName} variant="overline">
              Nom de l'utilisateur
            </Typography>
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={open}
            onClose={handleClose}
          >
            {MenuData.map(menu => (
              <MenuItem key={menu.id} onClick={handleClose}>
                <ListItemIcon>
                  {menu.icon === "PersonIcon" ? (
                    <PersonIcon fontSize="small" />
                  ) : menu.icon === "NotificationsActiveIcon" ? (
                    <NotificationsActiveIcon fontSize="small" />
                  ) : menu.icon === "ExitToAppIcon" ? (
                    <ExitToAppIcon fontSize="small" />
                  ) : null}
                </ListItemIcon>
                <Typography variant="inherit">{menu.title}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
