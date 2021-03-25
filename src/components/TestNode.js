import React from 'react';
import ReactFlow, { Handle } from 'react-flow-renderer';

const elements = [
  {
    id: '2',
    type: 'special',
    position: { x: 100, y: 100 },
    data: { text: 'A custom node' },
  },
];

const customNodeStyles = {
  background: '#9CA8B3',
  color: '#FFF',
  padding: 10,
  width: '50px',
  borderRadius: '100px',
};

const CustomNodeComponent = ({ data }) => {
  return (
    <div style={customNodeStyles}>
      <Handle
        type="target"
        position="left"
        style={{
          borderRadius: 0,
        }}
      />
      <div>{data.text}</div>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{
          top: '30%',
          borderRadius: 0,
        }}
      />
      <Handle
        type="source"
        position="right"
        id="b"
        style={{ top: '70%', borderRadius: 0 }}
      />
    </div>
  );
};

const nodeTypes = {
  special: CustomNodeComponent,
};

const CustomNodeExample = () => {
  return (
    <div style={{ height: 300 }}>
      <ReactFlow elements={elements} nodeTypes={nodeTypes} />
    </div>
  );
};

export default CustomNodeExample;
