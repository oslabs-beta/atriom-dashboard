import React from 'react';
import Home from './Home';

import AppPage from './AppPage';
import FlowContainer from './FlowContainer';
import '../styles.scss';

import '../styles/AppPage.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Modules from './Modules';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Modules} />
          <Route path="/app/:id" component={AppPage} />
          <Route path="/home" component={FlowContainer} />
          {/* <Route path="/module/:id" component={ModulePage} />
          <Route path="/dependencies" component={DependenciesPage} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
