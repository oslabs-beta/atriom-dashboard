import React, { useState, useContext }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import ModalContext from '../../contexts/ModalContext';

import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    border: '2px solid black',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    position: 'fixed',
    width: '250px',
    top: '10px',
    right: '25px',
  },
}));

function ModuleNode({ data }) {
  const {modal, setModal} = useContext(ModalContext);
  const classes = useStyles();

  const anchorEl = document.getElementById('navbar');

  const handleClose = () => {
    setModal({})
  };

  const mouseDownCoords = (e) => {
    window.checkForDrag = e.clientX;
  };

  const clickOrDrag = (e) => {
    const mouseUp = e.clientX;
    if (mouseUp < window.checkForDrag + 1 && mouseUp > window.checkForDrag - 1)
      setModal({ [`${data.consumingApplicationID}-${data.label}`]: true})
  };

  return (
    <div>
      <div
        className="ModuleNode"
        style={{ backgroundColor: data.color }}
        onMouseUp={clickOrDrag}
        onMouseDown={mouseDownCoords}
      >
        <p>{data.label}</p>
      </div>
      {modal[`${data.consumingApplicationID}-${data.label}`] ? (
        <Popper
        id="drop-menu-container"
        open={modal[`${data.consumingApplicationID}-${data.label}`] || false}
        anchorEl={anchorEl}
        placement="bottom-end"
        transition
        >
        <Fade in={modal[`${data.consumingApplicationID}-${data.label}`] || false}>
          <div className={classes.paper}>
            <div
              style={{
                display: 'flex',
                marginLeft: '-25px',
                alignItems: 'center',
                marginTop: '-10px',
              }}
            >
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
              <h2>{data.name}</h2>
            </div>

            <p id="transition-modal-description">
              Shared by:{' '}
              <Link to={`/app/${data.applicationID}`}>
                {data.applicationID}{' '}
              </Link>
            </p>
            <p id="transition-modal-description">
              Consumed by:{' '}
              <Link to={`/app/${data.consumingApplicationID}`}>
                {data.consumingApplicationID}
              </Link>
            </p>
            <p id="transition-modal-description">File:</p>
            <ul>
              {data.usedIn.map((item, i) => (
                <li key={`usedIn${i}`} className="ModuleNode-file">
                  {item.file}
                </li>
              ))}
            </ul>
          </div>
        </Fade>
      </Popper>
      ): null}
    </div>
  );
}

export default ModuleNode;
