import React, { useContext, useCallback } from 'react';
import ReactFlow, { Controls } from 'react-flow-renderer';
import AppContainer from './AppContainer';
import AppsContext from '../../contexts/AppsContext';
import AppKey from './AppKey';

const nodeTypes = {
  AppContainer,
  AppKey,
};

const appKeyEl = {
  id: 'key',
  position: { x: -250, y: 200 },
  type: 'AppKey',
};

const FlowContainer = () => {
  const { apps } = useContext(AppsContext);

  const onLoad = useCallback((instance) => {
    instance.fitView();
  }, []);

  if (apps.length)
    return (
      <div className="FlowContainer">
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
