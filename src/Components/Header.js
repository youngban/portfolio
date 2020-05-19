import React from "react";
import "../styles/main.css";
import {
  AppBar,
  Drawer,
  MenuItem,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  return (
    <div>
      <AppBar style={{ background: "transparent", boxShadow: "none" }}>
        <Toolbar>
          <IconButton edge="start" color="black">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
