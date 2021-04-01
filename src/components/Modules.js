import React, { useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppsContext from '../contexts/AppsContext';

const Modules = (props) => {
  const apps = useContext(AppsContext);
  console.log('MODULES', props.modules);

  return (
    <TableContainer component={Paper}>
      <center className="appPageTable">
        <h4>Modules</h4>
      </center>
      <Table size="small" className="appPageTable">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell>file</TableCell>
            <TableCell align="right">requires</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.modules.map((module) => (
            <TableRow key={module.id}>
              <TableCell component="th" scope="row">
                {module.name}
              </TableCell>
              <TableCell>{module.file}</TableCell>
              <TableCell align="right">{module.requires}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Modules;
