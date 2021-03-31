import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Consumes = (props) => {
  return (
    <TableContainer component={Paper}>
      <center>
        <h4>Consumes</h4>
      </center>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">file</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.consumes.map((element) => (
            <TableRow key={element.id}>
              <TableCell component="th" scope="row">
                {element.data.name}
              </TableCell>
              <TableCell align="right">{element.data.usedIn[0].file}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Consumes;
