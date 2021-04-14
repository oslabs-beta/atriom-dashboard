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
      <AppBar position="static">
        <Toolbar id="navbar">
          <DropMenu id="drop-menu" apps={apps} />
          <img
            src='../../../logos/BnW png/White-logo-no-background.svg'
            alt="Atriom logo"
            height="33px"
            id="navLogo"
          />
          <Typography className="navLinks" id="dashboard-link" noWrap>
            <Link to="/">Dashboard</Link>
            <Link to="/dependencies">Dependency Chart</Link>
            <Link
              to="/"
              onClick={() => {
                setApps([]);
              }}
            >
              Upload New File...
            </Link>
          </Typography>
          {/* <Search /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
