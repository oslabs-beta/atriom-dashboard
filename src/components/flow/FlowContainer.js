import React, { useState, useEffect, useContext, useCallback } from 'react';
import ReactFlow, { Controls } from 'react-flow-renderer';
import { Link, withRouter } from 'react-router-dom';
import AppContainer from './AppContainer';
import AppsContext from '../../contexts/AppsContext';
import AppKey from './AppKey';


const nodeTypes = {
  AppContainer,
  AppKey,
};

const appKeyEl = {
  id: 'key',
  position: { x: 0, y: 0 },
  type: 'AppKey',
};

const FlowContainer = () => {
  const { apps, setApps } = useContext(AppsContext);

  const onLoad = useCallback((instance) => {
    instance.fitView({ padding: 0.05 });
  }, []);

  if (apps.length)
    return (
      <div className="FlowContainer">
        <Link to="/">
        <button onClick={() => {
          setApps([]);

        }}
        >
          Upload a new file
            </button>
            </Link>
            <Link to="/dependencies">
        <button>
          Dependency Chart
            </button>
            </Link>
        <ReactFlow
          elements={[...apps, appKeyEl]}
          nodeTypes={nodeTypes}
          onLoad={onLoad}
        >
          <Controls />
        </ReactFlow>
      </div>
    );
  return null;
};

export default FlowContainer;
