import React from 'react';
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';
import AppNode from './AppNode';
import ModuleNode from './ModuleNode';

const onLoad = (reactFlowInstance) => {
  // reactFlowInstance.fitView();
  setTimeout(() => reactFlowInstance.fitView(), 0);
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

  const nodeTypes = {
    AppNode,
    ModuleNode,
  };

  return (
    <div
      style={{
        height: '375px',
        width: '375px',
      }}
    >
      <ReactFlowProvider>
        <ReactFlow
          elements={[appNode, ...data.consumesNodes]}
          nodeTypes={nodeTypes}
          nodesDraggable={false}
          zoomOnScroll={false}
          onLoad={onLoad}
        />
      </ReactFlowProvider>
    </div>
  );
};
