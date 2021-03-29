import React from 'react';

export default function SnackBarContent(props) {
  return (
    <div style={{ height: '100px', width: '100px', backgroundColor: 'pink' }}>
      {props.data.name}
    </div>
  );
}
