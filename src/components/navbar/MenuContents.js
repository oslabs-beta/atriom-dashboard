import "../../styles/MenuContents.scss"
import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AppListCollapse from './AppListCollapse'
import ModuleListCollapse from './ModuleListCollapse'


const MenuContents = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

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
        <AppListCollapse />
        <ModuleListCollapse />
      </List>
    </div>
  );
}

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