import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
  const { id, data } = props;
  const [linkActive, setLinkActive] = useState(true);

  const mouseDownCoords = (e) => {
    window.checkForDrag = e.clientX;
  };

  const clickOrDrag = (e) => {
    const mouseUp = e.clientX;
    if (mouseUp < window.checkForDrag + 1 && mouseUp > window.checkForDrag - 1)
      setLinkActive(true);
    else setLinkActive(false);
  };

  return linkActive ? (
    <Link
      to={`/app/${id}`}
      onMouseDown={mouseDownCoords}
      onMouseUp={clickOrDrag}
    >
      <div
        className="AppNode"
        style={{ ...defaultStyles, backgroundColor: data.color }}
      >
        <h4 className="AppNode-label">{data.label}</h4>
      </div>
    </Link>
  ) : (
    <Link
      to={`/app/${id}`}
      onClick={(e) => e.preventDefault()}
      onMouseUp={clickOrDrag}
      onMouseDown={mouseDownCoords}
    >
      <div
        className="AppNode"
        style={{ ...defaultStyles, backgroundColor: data.color }}
      >
        <h4 className="AppNode-label">{data.label}</h4>
      </div>
    </Link>
  );
}
