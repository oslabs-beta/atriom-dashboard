import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: theme.spacing(2, 4, 3),
    position: 'fixed',
    top: '10px',
    right: '25px',
  },
}));

export default function ({ data, handleClose, open }) {
  const classes = useStyles();

  const renderFileList = () =>
    data.usedIn.map((source, i) => (
      <li key={`usedIn${i}`} className="ModuleNode-file">
        {source.file}
      </li>
    ));

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <div className="ModuleModal">
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <h2>{data.name}</h2>
          </div>

          <p id="transition-modal-description">
            Shared by:{' '}
            <Link to={`/app/${data.applicationID}`}>{data.applicationID} </Link>
          </p>
          <p id="transition-modal-description">
            Consumed by:{' '}
            <Link to={`/app/${data.consumingApplicationID}`}>
              {data.consumingApplicationID}
            </Link>
          </p>
          <p id="transition-modal-description">File:</p>
          <ul>{renderFileList()}</ul>
        </div>
      </Fade>
    </Modal>
  );
}
