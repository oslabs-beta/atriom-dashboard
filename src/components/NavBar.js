import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


const NavBar = () => {
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
  return (
    <div className="NavBar">
      <AppBar position="static" color="inherit">
        <Toolbar variant="dense">
          <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
            <MenuIcon className="menuIcon"/>
          </IconButton>
          <Typography className="navLinks">
            <a href="#">Dashboard</a>
          </Typography>
          <Typography className="navLinks">
            <a href="#">Dependenct Chart</a>
          </Typography>
          <div className="search">
            <div className="searchIconContainer">
              <SearchIcon className="searchIcon"/>
            </div>
            <InputBase
              placeholder="Search…"
              className="searchInput"
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
