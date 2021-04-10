import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

const MoreNode = ({ id, data }) => {
  const remaining = data.consumes.length - 7;

  return (
    <Tooltip title={`Click this node to see more information on ${data.label}\'s modules`} placement="top">
      <Link to={`${ data.link }`} style={{ textDecoration: 'none', color: '#f5f5f5' }}>
        <div>
          <div
            className="MoreNode"
            // style={{ backgroundColor: '#6b6b6b', height: '80px', width: '80px', borderRadius: '50%' }}
            style={{ backgroundColor: '#787878' }}
          >
            <p>{`& ${remaining} more`}</p>
          </div>
        </div>
      </Link>
    </Tooltip>
  )
}

export default MoreNode;