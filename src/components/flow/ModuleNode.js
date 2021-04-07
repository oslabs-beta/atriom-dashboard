import React from 'react';
import ModuleModal from './ModuleModal';

function ModuleNode({ data }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
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
        onClick={handleOpen}
      >
        <p>{data.label}</p>
      </div>
      <ModuleModal handleClose={handleClose} data={data} open={open} />
    </div>
  );
}

export default ModuleNode;
