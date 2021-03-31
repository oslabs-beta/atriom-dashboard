import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AppNode(props) {
  const { id, data } = props;
  const [linkActive, setLinkActive] = useState(true);
  // console.log(props);

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
    // <Link
    //   to={`/app/${id}`}
    //   onMouseDown={mouseDownCoords}
    //   onMouseUp={clickOrDrag}
    // >
    <div className="AppNode" style={{ backgroundColor: data.color }}>
      <Link to={`/app/${id}`} style={{ textDecoration: 'none' }}>
        <h4 className="AppNode-label">{data.label}</h4>
      </Link>
    </div>
  ) : (
    // </Link>
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
