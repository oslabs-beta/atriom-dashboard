import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AppNode({ id, data }) {
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
    <div className="AppNode" style={{ backgroundColor: data.color }}>
      <Link to={`/app/${id}`} style={{ textDecoration: 'none' }}>
        <h4 className="AppNode-label">{data.label}</h4>
      </Link>
    </div>
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
