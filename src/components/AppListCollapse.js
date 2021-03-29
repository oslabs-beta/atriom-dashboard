import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const AppListCollapse = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="ListCollapse">
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Applications" className="category"/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className="MenuContentButton">
            <ListItemText primary="App1" className="listItem"/>
          </ListItem>
        </List>
      </Collapse>
    </div>
  )
}

export default AppListCollapse;