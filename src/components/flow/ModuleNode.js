import React from 'react';

const defaultStyles = {
  backgroundColor: 'pink',
  color: 'white',
  height: '80px',
  width: '80px',
  borderRadius: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const labelStyles = {
  textAlign: 'center',
  margin: 0,
  padding: 0,
};

export default function ModuleNode(props) {
  // console.log(props);
  const { data } = props;
  return (
    <div>
      <div style={{ ...defaultStyles, backgroundColor: data.color }}>
        <p style={labelStyles}>{data.label}</p>
      </div>
    </div>
  );
}
