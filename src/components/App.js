import React from 'react';
import Home from './Home';
import AppPage from './AppPage';
import FlowContainer from './FlowContainer';
import DependencyChart from './DependencyChart';
import '../styles.scss';

import '../styles/AppPage.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
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
