import React, { useEffect, useState, useContext } from 'react';
import AppsContext from '../../contexts/AppsContext';
import colors from '../../helpers/colors';
import { Alert } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
  createColorMap,
  convertAppObj,
  validateFileType,
  locationsMap,
} from '../../helpers';
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

  // Read file, validate contents, manipulate data

  useEffect(() => {
    if (apps.length && Array.isArray(apps)) props.history.push('/home');
    if (appFile) {
      const reader = new FileReader();
      reader.readAsText(appFile, 'UTF-8');
      reader.onload = function (e) {
        const raw = e.target.result;
        const manipulated = '[' + raw.slice(0, raw.length - 1) + ']';
        const contents = JSON.parse(manipulated);
        if (
          contents[0].consumes &&
          contents[0].dependencies &&
          contents[0].overrides
        ) {
          const colorMap = createColorMap(contents, colors);
          const nodeColors = convertAppObj(contents, colorMap);
          const convertedApps = locationsMap(nodeColors);
          localStorage.setItem('apps', JSON.stringify(convertedApps));
          setApps(convertedApps);
        } else setErrorMessage('Please upload a valid file');
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

  // Validate filetype and transfer file

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    const valid = validateFileType(e, files);

    if (valid) {
      setAppFile(valid);
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
