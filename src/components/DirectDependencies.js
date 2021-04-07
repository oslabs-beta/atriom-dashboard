import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const DirectDependecies = ({ dependencies }) => {
  return (
    <TableContainer component={Paper}>
      <center className="appPageTable">
        <h4>Direct Dependencies</h4>
      </center>
      <Table size="small" className="appPageTable">
        <TableHead>
          <TableRow>
            <TableCell className="tableData">name</TableCell>
            <TableCell align="right" className="tableData">
              version
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dependencies.map((element) => (
            <TableRow key={element.name}>
              <TableCell component="th" scope="row" className="tableData">
                {element.name}
              </TableCell>
              <TableCell align="right" className="tableData">
                {element.version}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DirectDependecies;
