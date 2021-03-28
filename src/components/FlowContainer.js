import React, { useState, useEffect, useContext, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  Controls,
  useZoomPanHelper,
} from 'react-flow-renderer';
import AppContainer from './AppContainer';
import AppsContext from '../contexts/AppsContext';

const nodeTypes = {
  AppContainer,
};

const FlowContainer = () => {
  const apps = useContext(AppsContext);

  const onNodeDragStart = (event, node) => console.log('drag start', node);
  const onNodeDragStop = (event, node) => console.log('drag stop', node);

  const onLoad = (reactFlowInstance) => {
    setTimeout(() => reactFlowInstance.fitView(), 0);
    // reactFlowInstance.fitView();
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: 'lightblue',
      }}
    >
      <ReactFlowProvider>
        <ReactFlow
          elements={apps}
          nodeTypes={nodeTypes}
          onLoad={onLoad}
          onNodeDragStart={onNodeDragStart}
          onNodeDragStop={onNodeDragStop}
        >
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default FlowContainer;
