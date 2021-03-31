import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Modules from './Modules.js';
import Consumes from './Consumes.js';
import Shared from './Shared.js';
import DirectDependecies from './DirectDependencies.js';

const AppPage = (props) => {
  return (
    <div className="appPage">
      <br />
      <center>
        <h1>Application Information</h1>
      </center>
      <div id="appInfoContainer">
        <h2>{props.app.data.name}</h2>
        <VerticalTimeline layout="1-column-left" class="timeline">
          <VerticalTimelineElement>
            <Modules modules={props.app.modules} />
          </VerticalTimelineElement>
          <VerticalTimelineElement>
            <Consumes consumes={props.app.data.consumesNodes} />
          </VerticalTimelineElement>
          <VerticalTimelineElement>
            <Shared shared={props.app.data.overrides} />
          </VerticalTimelineElement>
          <VerticalTimelineElement>
            <DirectDependecies dependencies={props.app.data.dependencies} />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default AppPage;
