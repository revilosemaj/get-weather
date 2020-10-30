import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navStyle: {
    backgroundColor: "#192733",
    color: "#fff"
  }
}));

const TopAppBar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.navStyle}>
        <Toolbar>
          <IconButton edge="start" aria-label="menu"></IconButton>
          <Typography variant="h5">GET WEATHER</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const Header = () => {
  return TopAppBar();
};

export default Header;
