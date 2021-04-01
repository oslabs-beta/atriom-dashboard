import React, { useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppsContext from '../contexts/AppsContext';

const Shared = (props) => {
  console.log('SHARED DATA', props.shared);

  const apps = useContext(AppsContext);

  return (
    <TableContainer component={Paper}>
      <center className="appPageTable">
        <h4>Shared</h4>
      </center>
      <Table size="small" className="appPageTable">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">version</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.shared.map((element) => (
            <TableRow key={element.id}>
              <TableCell component="th" scope="row">
                {element.name}
              </TableCell>
              <TableCell align="right">{element.version}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Shared;
