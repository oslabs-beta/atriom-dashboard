import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const MoreNode = ({ id, data }) => {
  const remaining = data.consumes.length - 7;

  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      // backgroundColor: '#1c2426',
      // color: '#f5f5f5',
      color: '#1c2426',
      backgroundColor: '#f5f5f5',
      fontSize: 13.5,
      width: 215,
      boxShadow: "1px 5px 15px #111111a6",
      padding: "6.5px 10px",
    },
  }))(Tooltip);

  return (
    <LightTooltip title={`Click this node to see more information on ${data.label}\'s modules`} placement="top">
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
    </LightTooltip>
  )
}

export default MoreNode;