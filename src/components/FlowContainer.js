import React from 'react';
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';
import AppContainer from './AppContainer';
import apps from '../app-data';

const nodeTypes = {
  AppContainer,
};

const FlowContainer = () => {
  return (
    <div
      style={{ height: '100vh', width: '100vw', backgroundColor: 'lightblue' }}
    >
      <ReactFlowProvider>
        <ReactFlow elements={apps} nodeTypes={nodeTypes} />
      </ReactFlowProvider>
    </div>
  );
};

export default FlowContainer;
