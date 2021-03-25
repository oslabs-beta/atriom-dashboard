import React from 'react';
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';
import AppNode from './AppNode';
import ModuleNode from './ModuleNode';

export default (props) => {
  // console.log(props);
  const { id, data } = props;

  const appNode = {
    id,
    type: 'AppNode',
    data: { label: data.label },
    position: { x: 100, y: 100 },
  };

  const nodeTypes = {
    AppNode,
    ModuleNode,
  };

  return (
    <div style={{ height: '350px', width: '350px' }}>
      <ReactFlowProvider>
        <ReactFlow
          elements={[appNode, ...data.moduleNodes]}
          nodeTypes={nodeTypes}
          nodesDraggable={false}
          zoomOnScroll={false}
        />
      </ReactFlowProvider>
    </div>
  );
};
