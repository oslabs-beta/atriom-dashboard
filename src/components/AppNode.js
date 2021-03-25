import React from 'react';

const styles = {
  color: 'white',
  backgroundColor: 'grey',
  height: '150px',
  width: '150px',
  borderRadius: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function AppNode() {
  return (
    <div style={styles}>
      <h4>App Node</h4>
    </div>
  );
}
