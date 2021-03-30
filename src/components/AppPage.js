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
  console.log('APP PAGE PROPS', props);
  const { app } = props;
  return (
    <div id="infoContainer">
      <center>
        <h1>App Info Tables</h1>
      </center>
      <br />
      {/* <VerticalTimeline>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement>key={element.key}</VerticalTimelineElement>
          );
        })}
      </VerticalTimeline> */}
      {/* <Navbar />  */}
      <h2>{props.app.data.name}</h2>
      <br />
      <div className="appPageTable">
        <Modules modules={props.app.modules} />
      </div>
      <br />
      <div className="appPageTable">
        <Consumes consumes={props.app.data.consumesNodes} />
      </div>
      <br />
      <div className="appPageTable">
        <Shared shared={props.app.data.overrides} />
      </div>
      <br />
      <div className="appPageTable">
        <DirectDependecies dependencies={props.app.data.dependencies} />
      </div>
    </div>
  );
};

export default AppPage;
