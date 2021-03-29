import React from 'react';
import Home from './Home';
import AppPage from './AppPage';
import FlowContainer from './FlowContainer';
import DependencyChart from './DependencyChart/DependencyChart';
import DropZoneContainer from './DropZone/DropZoneContainer';
import '../styles.scss';

import '../styles/AppPage.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={DropZoneContainer} />
          <Route path="/app/:id" component={AppPage} />
          <Route path="/home" component={FlowContainer} />
          <Route path="/dependencies" component={DependencyChart} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
