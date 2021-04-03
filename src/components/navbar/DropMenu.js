import '../../styles/MenuContents.scss';
import React, { useState } from 'react';
import IconButton from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import MenuContents from './MenuContents';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default function DropMenu({ apps }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget.parentElement.parentElement);
    setOpen((prev) => !prev);
  };

  const handleClose = (event) => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <IconButton
          edge="start"
          className="menuButton"
          color="inherit"
          aria-label="dropMenu"
          onClick={handleClick}
        >
          <MenuIcon className="menuIcon" />
        </IconButton>
        {open ? (
          <Popper
            id="drop-menu-container"
            open={open}
            anchorEl={anchorEl}
            placement="bottom-start"
            transition
          >
            <Grow
              in={open}
              style={{ transformOrigin: '0 0 0' }}
              timeout={600}
              className="grow-transition"
            >
              <div style={{ zIndex: 10 }}>
                <MenuContents apps={apps} close={handleClose} />
              </div>
            </Grow>
          </Popper>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
