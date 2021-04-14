import React from 'react';
import DropZone from './DropZone';
import '../../styles/DropZoneContainer.scss';

function DropZoneContainer({ history }) {
  return (
    <div className="content">
      {/* <h1 className="title">ATRIOM</h1> */}
      <img
        src='../../../logos/Logo Files/For Web/svg/Color logo - no background.svg'
        alt="Atriom logo"
        height="150vh"
        id="DZLogo"
      />
      <DropZone history={history} />
    </div>
  );
}

export default DropZoneContainer;
