import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

//import Navbar from ./Navbar
import Modules from './Modules.js';
import AppImage from './AppImage.js';
import Consumes from './Consumes.js';
import Shared from './Shared.js';
import DirectDependecies from './DirectDependencies.js';

const AppPage = (props) => {
  console.log(props);
  const { app } = props;
  return (
    <div id="infoContainer">
      <h1>App Info Tables</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement>key={element.key}</VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      {/* <Navbar />  */}
      <h2>App name</h2>
      <div className="row">
        <Modules modules={props.app.modules} />
        <AppImage />
      </div>
      <div className="row">
        <Consumes consumes={props.app.data.consumesNodes} />
      </div>
      <div className="row">
        <Shared />
        <DirectDependecies depencies={app.depencies} />
      </div>
    </div>
  );
};

export default AppPage;
