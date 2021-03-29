import "../styles/NavBar.scss"
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Search from './Search';
import DropMenu from './DropMenu'


const NavBar = () => {
  return (
    <div className="NavBar">
      <AppBar position="static" color="inherit">
        <Toolbar variant="dense">
          <DropMenu id="drop-menu"/>
          <Typography className="navLinks">
            <a href="/">Dashboard</a>
          </Typography>
          <Typography className="navLinks" noWrap>
            <a href="/">Dependency Chart</a>
          </Typography>
          <Search />
        </Toolbar>
      </AppBar>
    </div>
  );
  // return (
  //   <div className="NavBar">
  //     <ul>
  //       <li id="nbLogo">
  //         *ATRIOM LOGO HERE*
  //       </li>
  //       <li>
  //         Dashboard
  //       </li>
  //       <li>
  //         Dependency Graph
  //       </li>
  //     </ul>
  //   </div>
  // )
}

export default NavBar;
