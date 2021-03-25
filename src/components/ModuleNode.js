import React from 'react';

const styles = {
  backgroundColor: 'pink',
  height: '80px',
  width: '80px',
  borderRadius: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

export default function ModuleNode() {
  return (
    <div style={styles}>
      <h4>Module Node</h4>
    </div>
  );
}
