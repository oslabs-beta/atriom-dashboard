import React, { useContext, useState } from 'react';
import NavBar from './navbar/NavBar';
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
  const { apps } = useContext(AppsContext);

  const renderAppRoutes = () =>
    apps.map((app, i) => (
      <Route key={`AppRoute${i}`} path={`/app/${app.id}`} exact>
        <AppPage app={app} />
      </Route>
    ));
  //console.log(apps);
  return (
    <Router>
      <div className="App">
        {/* <NavBar /> */}
        <Switch>
          {/* {apps.length ? (
            <Route path="/" exact>
              <AppPage app={apps[0]} />
            </Route>
          ) : null} */}
          <Route path="/home" exact component={FlowContainer} />
          {renderAppRoutes()}
          <Route path="/dependecies" component={DependencyChart} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
