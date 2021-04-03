import '../../styles/MenuContents.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppListCollapse from './AppListCollapse';
import TableChartIcon from '@material-ui/icons/TableChart';

const MenuContents = ({ apps, close }) => {
  return (
    <div className="MenuContents">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="drop-menu-subheader">
            Library
          </ListSubheader>
        }
      >
        <Link to="/dependencies">
          <ListItem
            className="MenuContentButton"
            key="dependency-link"
            onClick={close}
          >
            <TableChartIcon className="depIcon" />
            <ListItemText primary="Dependency Chart" className="listItem" />
          </ListItem>
        </Link>
        <AppListCollapse apps={apps} close={close} />
      </List>
    </div>
  );
};

// const MenuContents = () => {
//   const [open, setOpen] = React.useState(true);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   return (
//     <div className="MenuContents">
//       <List
//         component="nav"
//         aria-labelledby="nested-list-subheader"
//         subheader={
//           <ListSubheader component="div" id="nested-list-subheader">
//             Library
//           </ListSubheader>
//         }
//       >
//         <ListItem button onClick={handleClick}>
//           <ListItemText primary="Applications" />
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <List component="div" disablePadding>
//               <ListItem button className="MenuContentButton">
//                 <ListItemText primary="App1" className="listItem"/>
//               </ListItem>
//             </List>
//           </Collapse>
//         <ListItem button onClick={handleClick}>
//           <ListItemText primary="Modules" />
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <List component="div" disablePadding>
//               <ListItem button className="MenuContentButton">
//                 <ListItemText primary="Module1" className="listItem"/>
//               </ListItem>
//               <ListItem button className="MenuContentButton">
//                 <ListItemText primary="Module2" className="listItem"/>
//               </ListItem>
//             </List>
//           </Collapse>
//       </List>
//     </div>
//   );
// }

export default MenuContents;
