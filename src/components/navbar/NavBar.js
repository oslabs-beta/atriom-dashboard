import "../../styles/NavBar.scss"
import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Search from './Search';
import DropMenu from './DropMenu'


const NavBar = () => {
  return (
    <div className="NavBar-container">
      <AppBar position="static">
        <Toolbar id="navbar">
          <DropMenu id="drop-menu"/>
          <Typography className="navLinks">
            <Link to="/">DASHBOARD</Link>
          </Typography>
          <Typography className="navLinks" noWrap>
            <Link to="/dependencies">DEPENDENCY CHART</Link>
          </Typography>
          {/* <Search /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
