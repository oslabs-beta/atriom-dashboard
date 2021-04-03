import React from 'react';
import DropZone from './DropZone';
import '../../styles/DropZoneContainer.scss';

function DropZoneContainer({ history }) {
  return (
    <div className="content">
      {/* <h1 className="title">ATRIOM</h1> */}
      <DropZone history={history} />
    </div>
  );
}

export default DropZoneContainer;
