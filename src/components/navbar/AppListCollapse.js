import "../../styles/MenuContents.scss"
import React, { useContext } from 'react';
import AppsContext from '../../contexts/AppsContext';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded';

const AppListCollapse = () => {
  const [open, setOpen] = React.useState(true);
  const { apps } = useContext(AppsContext);

  // console.log(apps)

  const handleClick = () => {
    setOpen(!open);
  };

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  //...

  // <ListItemLink href="#simple-list">
  //   <ListItemText primary="Spam" />
  // </ListItemLink>


  const appList = apps.map((obj) => {
    return (
      <Link to={`/app/${obj.id}`} >
      <ListItem className="MenuContentButton" key={obj.id}>
        <EcoRoundedIcon className="listIcon" />
        <ListItemText primary={obj.id} className="listItem"/>
      </ListItem>
      </Link>
    )
  });

  return (
    <div className="ListCollapse">
      <ListItem button onClick={handleClick}>
        <DeviceHubIcon/>
        <ListItemText primary="Applications" className="category listItem"/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* <ListItem button className="MenuContentButton">
            <ListItemText primary="App1" className="listItem"/>
          </ListItem> */}
          {appList}
        </List>
      </Collapse>
    </div>
  )
}

export default AppListCollapse;