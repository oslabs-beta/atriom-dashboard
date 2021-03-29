import React, { useEffect, useState, useContext } from 'react';
import AppsContext from '../../contexts/AppsContext';
import colors from '../../helpers/colors';
import { Alert } from '@material-ui/lab'
import Button from '@material-ui/core/Button';
import { createColorMap, convertAppObj } from '../../helpers';
import '../../styles/DropZone.scss'

const DropZone = (props) => {
  const { apps, setApps } = useContext(AppsContext);

  const [appFile, setAppFile] = useState();
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    if (apps.length && Array.isArray(apps)) props.history.push('/home')

    if (errorMessage) console.log(errorMessage);
    if (appFile) {
      console.log('AppFile: ', appFile);
      const reader = new FileReader();
      reader.readAsText(appFile, 'UTF-8');
      reader.onload = function (e) {
        const contents = eval(e.target.result);
        const colorMap = createColorMap(contents, colors);
        const convertedApps = convertAppObj(contents, colorMap);
        setApps(convertedApps);
      }
    }
  })

  const dragOver = (e) => {
    e.preventDefault();
  }

  const dragEnter = (e) => {
    e.preventDefault();
  }

  const dragLeave = (e) => {
    e.preventDefault();
  }

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    const file = files[0];
    const fileType = file.name.substring(file.name.lastIndexOf('.') + 1, file.name.length) || file.name;
    let valid;
    if (fileType === 'js') valid = true;
    else valid = false;
    console.log('valid: ', valid);

    if (valid) {
      setAppFile(file);
      setErrorMessage(null);
    }
    else setErrorMessage('Please upload a valid file')
  }


  if (errorMessage) {
    return (
      <div className="container">
        <div className="drop-container"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
        >
          <div className="drop-message">
            <div className="alert">
            <Alert
              onClick={() => {setErrorMessage('')}}
              action={
                <Button color="inherit" sixe="small">X</Button>
              }
              variant="filled"
              severity="error"
            >
              {errorMessage}
              </Alert>
              </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container">
        <div className="drop-container"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
        >
          <div className="drop-message">
            Drag and drop your file to view your app!
          </div>
        </div>
      </div>
    )
  }
}

export default DropZone;