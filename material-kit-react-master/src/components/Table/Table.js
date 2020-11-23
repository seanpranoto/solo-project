import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Link} from "@reach/router";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from 'components/CustomButtons/Button';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const columns = [
    { id: 'University Name', label: 'Univerisity Name', minWidth: 170 },
    { id: 'Professor Name', label: 'Professor Name', minWidth: 170 },
    { id: 'Rating', label: 'Rating', minWidth: 170 },
    { id: 'Actions', label: 'Actions', minWidth: 170 },
];

const useStyles = makeStyles({
    root: {
        width: '100%',
        margin:'1rem'
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable({ professors }) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <StyledTableRow>
                            {columns.map((column) => (
                                <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {professors.map((prof) => {
                            return (
                                <StyledTableRow hover role="checkbox" tabIndex={-1} key={prof._id}>
                                    <StyledTableCell >
                                        {prof.uni}
                                    </StyledTableCell>
                                    <StyledTableCell >
                                        {prof.prof}
                                    </StyledTableCell>
                                    <StyledTableCell >
                                        {prof.rating}
                                    </StyledTableCell>
                                    <StyledTableCell >
                                        <Link to={`/rate/${prof._id}`}><Button color="info">Rate</Button></Link>
                                    </StyledTableCell>
                                </StyledTableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
