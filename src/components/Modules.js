import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Modules = ({ modules }) => {
  return (
    <TableContainer component={Paper}>
      <center className="appPageTable">
        <h4>Modules</h4>
      </center>
      <Table size="small" className="appPageTable">
        <TableHead>
          <TableRow>
            <TableCell className="tableData">name</TableCell>
            <TableCell className="tableData">file</TableCell>
            <TableCell align="right" className="tableData">
              requires
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {modules.map((module) => (
            <TableRow key={module.id}>
              <TableCell component="th" scope="row" className="tableData">
                {module.name}
              </TableCell>
              <TableCell className="tableData">{module.file}</TableCell>
              <TableCell align="right" className="tableData">
                {module.requires}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Modules;
