import '../../styles/NavBar.scss';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Search from './Search';
import DropMenu from './DropMenu';
import AppsContext from '../../contexts/AppsContext';

const NavBar = () => {
  const { apps, setApps } = useContext(AppsContext);
  return (
    <div className="NavBar-container">
      <AppBar position="static" color="inherit">
        <Toolbar id="navbar">
          <DropMenu id="drop-menu" apps={apps} />
          <Typography className="navLinks">
            <Link to="/">DASHBOARD</Link>
          </Typography>
          <Typography className="navLinks" noWrap>
            <Link to="/dependencies">DEPENDENCY CHART</Link>
            <Link
              to="/"
              onClick={() => {
                setApps([]);
              }}
            >
              UPLOAD NEW FILE
            </Link>
          </Typography>
          {/* <Search /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
