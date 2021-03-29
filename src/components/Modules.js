import React, { useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppsContext from '../contexts/AppsContext';

function createData(firstName, lastName, age) {
  return { firstName, lastName, age };
}

let app = 'Checkout';

//console.log(data.modules);
//each row should be an object with key:"value" pairs of the data
const rows = [
  createData('james', 'smith', 20),
  createData('mary', 'jones', 30),
  createData('may', 'wong', 30),
  createData('maureen', 'onchiri', 24),
];
//map through data
// data.map(data => {
//   for (const prop in data) {
//     if (prop.modules.hasOwnProperty('name'))
//   }
// })
//for in loop through each element
//if element has property of modules with a property of modules.name that equals app name, invoke create data
//invoke create data on

// console.log(data);

const Modules = () => {
  const apps = useContext(AppsContext);
  console.log(apps);
  const renderModules = () => {
    return apps.map((app) => {
      <TableCell component="th" scope="row">
        {row.firstName}
      </TableCell>;
    });
  };
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell>file</TableCell>
            <TableCell align="right">requires</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.firstName}>
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Modules;
