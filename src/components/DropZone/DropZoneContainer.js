import React from 'react';
import DropZone from './DropZone';
import '../../styles/DropZoneContainer.scss';
import logo from '../../images/colorLogo.svg';

function DropZoneContainer({ history }) {
  return (
    <div className="content">
      {/* <h1 className="title">ATRIOM</h1> */}
      <img src={logo} alt="Atriom logo" height="150vh" id="DZLogo" />
      <DropZone history={history} />
    </div>
  );
}

export default DropZoneContainer;
