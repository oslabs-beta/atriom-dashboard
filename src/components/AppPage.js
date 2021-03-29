import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import '../dummy-data';
//import Navbar from ./Navbar
import Modules from './Modules.js';
import AppImage from './AppImage.js';
import Consumes from './Consumes.js';
import Shared from './Shared.js';
import DirectDependecies from './DirectDependencies.js';

const AppPage = () => {
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
    </div>
  );
};

export default AppPage;
