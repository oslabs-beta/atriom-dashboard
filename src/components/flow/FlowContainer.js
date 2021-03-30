import React, { useState, useEffect, useContext, useCallback } from 'react';
import ReactFlow, { Controls } from 'react-flow-renderer';
import AppContainer from './AppContainer';
import AppsContext from '../../contexts/AppsContext';
import AppKey from './AppKey';
import NavBar from '../navbar/NavBar'

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
  const { apps } = useContext(AppsContext);

  const onLoad = useCallback((instance) => {
    instance.fitView({ padding: 0.05 });
  }, []);

  if (apps.length)
    return (
      <div className="FlowContainer">
        <NavBar />
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
