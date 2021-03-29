import React, { useContext, useState } from 'react';
import Home from './Home';

import AppPage from './AppPage';

import FlowContainer from './flow/FlowContainer';
import AppsContext from '../contexts/AppsContext';
import DependencyChart from './DependencyChart/DependencyChart';

import '../styles.scss';

import '../styles/AppPage.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Modules from './Modules';

const App = () => {
  const apps = useContext(AppsContext);

  const renderAppRoutes = () =>
    apps.map((app, i) => (
      <Route key={`AppRoute${i}`} path={`/app/${app.id}`} exact>
        <AppPage app={app} />
      </Route>
    ));

  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={FlowContainer} />
          <Route path="/home" exact component={FlowContainer} />
          {renderAppRoutes()}
          <Route path="/dependencies" component={DependencyChart} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
