import React from 'react';

const defaultStyles = {
  color: 'white',
  backgroundColor: 'grey',
  height: '150px',
  width: '150px',
  borderRadius: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function AppNode(props) {
  // console.log(props);
  const { data } = props;
  return (
    <div style={{ ...defaultStyles, backgroundColor: data.color }}>
      <a href="https://www.google.com">
        <h4>{data.label}</h4>
      </a>
    </div>
  );
}
