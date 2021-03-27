import "../styles/MenuContents.scss"
import React from 'react';
import IconButton from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuContents from './MenuContents'

export default function DropMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    // console.log(event.currentTarget.parentElement.parentElement)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton edge="start" className="menuButton" color="inherit" aria-label="dropMenu" onClick={handleClick}>
        <MenuIcon className="menuIcon"/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuContents />
      </Menu>
    </div>
  );
}
