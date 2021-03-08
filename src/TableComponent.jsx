import React from 'react';

import { Card, CardHeader, CardContent } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function TableComponent(props) {
    const { data } = props;
    //const data = props.data;
    return (
        <Card>
            <CardHeader title="Separations" />
            <CardContent>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Employee Name</TableCell>
                                <TableCell align="right">Timestamp</TableCell>
                                <TableCell align="right">Email Address</TableCell>
                                <TableCell align="right">Some Column</TableCell>
                                <TableCell align="right">Another Column</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.time.toLocaleString()}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
}

