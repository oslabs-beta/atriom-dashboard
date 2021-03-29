import React from 'react';
import DropZone from './DropZone';
import '../../styles/DropZoneContainer.scss'

function DropZoneContainer() {
  return (
    <div>
      <p className="title">Drag and Drop Yo Shit!</p>
      <div className="content">
        <DropZone />
      </div>
    </div>
  );
}

export default DropZoneContainer;