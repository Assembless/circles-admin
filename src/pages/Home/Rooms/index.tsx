// Deps scoped imports.
import React from "react";
import { makeStyles, Box, Table, TableHead, TableRow, TableCell, TableBody, Button, Icon, Typography } from "@material-ui/core";

// Project scoped imports.
import { useCommand } from 'api/hooks';
import { RoomList } from 'api/commands';
import { useForkedState } from 'utils/hooks/general';
import { isLoaded } from "api/utils";
import { IRoom } from "types";
// Component scoped imports.
import styles from "./styles";




const Rooms = () => {
    const classes = useStyles();

    const roomsRq = useCommand(RoomList);
    const [rooms] = useForkedState(rq => isLoaded(rq) ? rq.data as IRoom[] : null, roomsRq);

    if (!rooms) return <h4>Loading...</h4>;
    return <Box className={classes.root}>
        <Table className={classes.table}>
            <TableHead>
                <TableRow >
                    <TableCell><Typography variant='h4' className={classes.columnName}>Room ID</Typography></TableCell>
                    <TableCell><Typography variant='h4' className={classes.columnName}>Name</Typography></TableCell>
                    <TableCell><Typography variant='h4' className={classes.columnName}>Created at</Typography></TableCell>
                    <TableCell><Typography variant='h4' className={classes.columnName}>Access</Typography></TableCell>
                    <TableCell><Typography variant='h4' className={classes.columnName}>Action</Typography></TableCell >
                </TableRow>
            </TableHead>
            <TableBody >
                {rooms.map((room, index) => <SingleRoom key={index} roomData={room} />)}
            </TableBody>
        </Table>
    </Box>
}

const SingleRoom = ({ roomData }: { roomData: IRoom }) => {
    return (
        <TableRow hover style={{ cursor: 'pointer' }}>
            <TableCell>{roomData.id}</TableCell>
            <TableCell>{roomData.label}</TableCell>
            <TableCell> needs date handling</TableCell>
            <TableCell>to do parse from string</TableCell>
            <TableCell >
                <Icon color='secondary'>delete_forever</Icon>
            </TableCell>
        </TableRow>
    )
}

const useStyles = makeStyles(styles);


// Time to export! 🚚
export default Rooms;