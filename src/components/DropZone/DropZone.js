import React, { useEffect, useState } from 'react';
import '../../styles/DropZone.scss'

const DropZone = () => {

  const [appFile, setAppFile] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  let fileType;

  useEffect(() => {
    if (appFile) {
      const fileName = appFile[0].name;
      fileType = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }
    let valid;
    if (fileType === 'js') valid = true;
    else valid = false;
    console.log('valid: ', valid);

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
    console.log('files:', files);
    setAppFile(files)
  }


  return (
    <div className="container">
      <div className="drop-container"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <div className="drop-message">
            Drag and Drop your file here to view your App!
        </div>
      </div>
    </div>
  )
}

export default DropZone;