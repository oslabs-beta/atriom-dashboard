import React from 'react';
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';
import AppNode from './AppNode';
import ModuleNode from './ModuleNode';
import MoreNode from './MoreNode';

const nodeTypes = {
  AppNode,
  ModuleNode,
};

const nodeTypesPlus = {
  AppNode,
  ModuleNode,
  MoreNode,
};

export default ({ id, data }) => {
  const appNode = {
    id,
    type: 'AppNode',
    data,
    // Keep this position hardcoded unless the size of AppContainer or AppNode changes!
    // This centers the app node in the container
    position: { x: 100, y: 100 },
  };

  const moreNode = {
    id: `more ${id}`,
    type: 'MoreNode',
    data,
    position: { x: 40, y: 40 },
  };

  return data.consumesNodes.length <= 8 ? (
    <div className="AppContainer">
      <ReactFlowProvider>
        <ReactFlow
          elements={[appNode, ...data.consumesNodes]}
          nodeTypes={nodeTypes}
          nodesDraggable={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
        />
      </ReactFlowProvider>
    </div>
  ) : (
    <div className="AppContainer">
      <ReactFlowProvider>
        <ReactFlow
          elements={[appNode, moreNode, ...data.consumesNodes.slice(0, 7)]}
          nodeTypes={nodeTypesPlus}
          nodesDraggable={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
        />
      </ReactFlowProvider>
    </div>
  );
};
