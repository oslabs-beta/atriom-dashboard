import React from 'react';
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';
import AppNode from './AppNode';
import ModuleNode from './ModuleNode';

const onLoad = (reactFlowInstance) => {
  reactFlowInstance.fitView({ padding: 0.1 });
};

const nodeTypes = {
  AppNode,
  ModuleNode,
};

export default (props) => {
  const { id, data } = props;

  const appNode = {
    id,
    type: 'AppNode',
    data,
    // Keep this position hardcoded unless the size of AppContainer changes!!! This centers the app node in the container
    position: { x: 100, y: 100 },
  };

  console.log(props);

  return (
    <div className="AppContainer">
      <ReactFlowProvider>
        <ReactFlow
          elements={[appNode, ...data.consumesNodes]}
          nodeTypes={nodeTypes}
          nodesDraggable={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          onLoad={onLoad}
        />
      </ReactFlowProvider>
    </div>
  );
};
