import React, { useState, useEffect, useContext, useCallback } from 'react';
import ReactFlow, { Controls } from 'react-flow-renderer';
import AppContainer from './AppContainer';
import AppsContext from '../../contexts/AppsContext';

const nodeTypes = {
  AppContainer,
};

const FlowContainer = () => {
  const apps = useContext(AppsContext);
  const onLoad = useCallback((instance) => {
    instance.fitView();
  }, []);

  if (apps.length)
    return (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          backgroundColor: 'lightblue',
        }}
      >
        <ReactFlow elements={apps} nodeTypes={nodeTypes} onLoad={onLoad}>
          <Controls />
        </ReactFlow>
      </div>
    );
  return null;
};

export default FlowContainer;
