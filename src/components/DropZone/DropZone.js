import React, { useEffect, useState, useContext } from 'react';
import AppsContext from '../../contexts/AppsContext';
import colors from '../../helpers/colors';
import { Alert } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { createColorMap, convertAppObj } from '../../helpers';
import '../../styles/DropZone.scss';

const useStyles = makeStyles((theme) => ({
  outlinedError: {
    color: theme.palette.error.main,
  },
}));

const DropZone = (props) => {
  const { apps, setApps } = useContext(AppsContext);

  const [appFile, setAppFile] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (apps.length && Array.isArray(apps)) props.history.push('/home');

    if (errorMessage) console.log(errorMessage);
    if (appFile) {
      const reader = new FileReader();
      reader.readAsText(appFile, 'UTF-8');
      reader.onload = function (e) {
        const raw = e.target.result;
        const manipulated = '[' + raw.slice(0, raw.length - 1) + ']';
        const contents = JSON.parse(manipulated);
        // const contents = eval(e.target.result);
        const colorMap = createColorMap(contents, colors);
        const convertedApps = convertAppObj(contents, colorMap);
        setApps(convertedApps);
      };
    }
  });

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    const file = files[0];
    const fileType =
      file.name.substring(file.name.lastIndexOf('.') + 1, file.name.length) ||
      file.name;

    let valid;
    if (fileType === 'js' || fileType === 'json' || fileType === 'data')
      valid = true;
    else valid = false;

    if (valid) {
      setAppFile(file);
      setErrorMessage(null);
    } else setErrorMessage('Please upload a valid file');
  };

  const classes = useStyles();

  if (errorMessage) {
    return (
      <div
        className="drop-container"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <div className="drop-message">
          <Alert
            className={classes.outlinedError}
            onClick={() => {
              setErrorMessage('');
            }}
            action={
              <Button color="inherit" size="medium">
                X
              </Button>
            }
            variant="outlined"
            severity="error"
          >
            {errorMessage}
          </Alert>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="drop-container"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <div className="drop-message">
          Drag and drop your file to view your dashboard
        </div>
      </div>
    );
  }
};

export default DropZone;
