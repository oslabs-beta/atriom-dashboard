import React, { useState } from 'react';
import ModuleModal from './ModuleModal';

function ModuleNode({ data }) {
  const [open, setOpen] = useState(false);

  const mouseDownCoords = (e) => {
    window.checkForDrag = e.clientX;
  };

  const clickOrDrag = (e) => {
    const mouseUp = e.clientX;
    if (mouseUp < window.checkForDrag + 1 && mouseUp > window.checkForDrag - 1)
      setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        className="ModuleNode"
        style={{ backgroundColor: data.color }}
        onMouseUp={clickOrDrag}
        onMouseDown={mouseDownCoords}
      >
        <p>{data.label}</p>
      </div>
      <ModuleModal handleClose={handleClose} data={data} open={open} />
    </div>
  );
}

export default ModuleNode;
