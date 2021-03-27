import React from 'react';
//import Navbar from ./Navbar
import Modules from './Modules.js';
import AppImage from './AppImage.js';
import Consumes from './Consumes.js';
import Shared from './Shared.js';
import DirectDependecies from './DirectDependencies.js';

const AppPage = () => {
  return (
    <div id="infoContainer">
      {/* <Navbar />  */}
      <h2>App name</h2>
      <div className="row">
        <Modules />
        <AppImage />
      </div>
      <div className="row">
        <Consumes />
      </div>
      <div className="row">
        <Shared />
        <DirectDependecies />
      </div>
    </div>
  );
};

export default AppPage;
