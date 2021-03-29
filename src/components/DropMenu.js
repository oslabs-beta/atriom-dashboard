import "../styles/MenuContents.scss"
import React from 'react';
import IconButton from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuContents from './MenuContents'
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


export default function DropMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);


  const handleClick = (event) => {
    // console.log(event.currentTarget.parentElement.parentElement)
    // setAnchorEl(event.currentTarget);
    setAnchorEl(anchorEl ? null : event.currentTarget.parentElement.parentElement);
    setOpen((prev) => !prev)
  };

  // const open = Boolean(anchorEl);

  const handleClose = () => {
    // setAnchorEl(null);
    setOpen(false);
  };

  // return (
  //   <div>
  //     <IconButton edge="start" className="menuButton" color="inherit" aria-label="dropMenu" onClick={handleClick}>
  //       <MenuIcon className="menuIcon"/>
  //     </IconButton>
  //     <Menu
  //       id="drop-menu-container"
  //       anchorEl={anchorEl}
  //       keepMounted
  //       open={Boolean(anchorEl)}
  //       onClose={handleClose}
  //     >
  //       <MenuContents />
  //     </Menu>
  //   </div>
  // );

  return (
    <div>
    {/* <ClickAwayListener onClickAway={handleClose}> */}
      <IconButton edge="start" className="menuButton" color="inherit" aria-label="dropMenu" onClick={handleClick}>
        <MenuIcon className="menuIcon"/>
      </IconButton>
      <Popper
        id="drop-menu-container"
        open={open}
        anchorEl={anchorEl}
        placement='bottom-start'
        transition
        >
        {/* {({ TransitionProps }) => (
          <Fade {...TransitionProps} in={open}>
            <MenuContents />
          </Fade>
        )} */}
        <Grow
          in={open}
          style={{ transformOrigin: '0 0 0' }}
          timeout={ 600 }
          className="grow-transition"
          >
            <div>
              <MenuContents />
            </div>
        </Grow>
      </Popper>
    {/* </ClickAwayListener> */}
    </div>
  )
}
