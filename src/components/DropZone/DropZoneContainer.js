import React from 'react';
import DropZone from './DropZone';
import '../../styles/DropZoneContainer.scss';

function DropZoneContainer({ history }) {
  return (
    <div>
      <p className="title">ATRIOM</p>
      <div className="content">
        <DropZone history={history} />
      </div>
    </div>
  );
}

export default DropZoneContainer;
