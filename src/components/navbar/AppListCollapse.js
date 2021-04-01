import '../../styles/MenuContents.scss';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded';

const AppListCollapse = ({ apps }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const renderAppList = () =>
    apps.map((obj, i) => (
      <Link to={`/app/${obj.id}`} key={`AppLink${i}`}>
        <ListItem className="MenuContentButton" key={obj.id}>
          <EcoRoundedIcon className="listIcon" />
          <ListItemText primary={obj.id} className="listItem" />
        </ListItem>
      </Link>
    ));
  return (
    <div className="ListCollapse">
      <ListItem button onClick={handleClick}>
        <DeviceHubIcon />
        <ListItemText primary="Applications" className="category listItem" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {renderAppList()}
        </List>
      </Collapse>
    </div>
  );
};

export default AppListCollapse;
