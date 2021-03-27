import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import FlowTest from './FlowTest';
import CustomNodeExample from './TestNode';
import FlowContainer from './FlowContainer';
import DependencyChart from './DependencyChart';
import '../styles.scss';


export default function App() {

  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={DependencyChart} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}
