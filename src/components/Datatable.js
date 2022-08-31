import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { connect } from 'react-redux';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { loadUserAction } from '../actions/authActions';


function createData(usernames, email, gender, nationality, marital_status, verified) {
  return { usernames, email, gender, nationality, marital_status, verified };
}


function Datatable(props) {
    let accountVerified = props.user.verified ? "True" : "False";
    const rows = [
        createData(props.user.firstName+" "+props.user.lastName, props.user.email, props.user.gender, props.user.nationality, props.user.maritalStatus, accountVerified)
    ];
  return (
    <TableContainer component={Paper} sx={{marginTop: 15}}>
       <Typography component="h3" variant="h5" sx={{textAlign: 'center', fontWeight: 'bold'}}> Account Information </Typography>
      <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell> Full Username </TableCell>
            <TableCell> Email</TableCell>
            <TableCell> Gender</TableCell>
            <TableCell> Nationality</TableCell>
            <TableCell> Marital Status</TableCell>
            <TableCell> Account Verified</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                    {row.usernames}
                </TableCell>
                <TableCell> {row.email}</TableCell>
                <TableCell> {row.gender}</TableCell>
                <TableCell> {row.nationality}</TableCell>
                <TableCell> {row.marital_status}</TableCell>
                <TableCell> {row.verified}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    };
};
export default connect(mapStateToProps, {loadUserAction})(Datatable);
