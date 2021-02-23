// Deps scoped imports.
import React from "react";
import { makeStyles, Box, Avatar, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@material-ui/core";
import cx from "classnames";

// Project scoped imports.
import { useCommand } from 'api/hooks';
import { RoomList } from 'api/commands';
import { useForkedState } from 'utils/hooks/general';
import { isLoaded } from "api/utils";
import { IRoom } from "types";
// Component scoped imports.
import styles from "./styles";




const Component = () => {
    const classes = useStyles();

    const roomsRq = useCommand(RoomList);
    const [rooms] = useForkedState(rq => isLoaded(rq) ? rq.data as IRoom[] : null, roomsRq);

    if (!rooms) return <h4>Loading...</h4>;
    return <Box >
        <Table>
            <TableHead>
                <TableRow >
                    <TableCell><h4>Room ID</h4></TableCell>
                    <TableCell><h4>Name</h4></TableCell>
                    <TableCell><h4>Created at</h4></TableCell>
                    <TableCell><h4>Access</h4></TableCell>
                    <TableCell></TableCell>
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
        <TableRow style={{ cursor: 'pointer' }}>
            <TableCell>{roomData.id}</TableCell>
            <TableCell>{roomData.label}</TableCell>
            <TableCell> needs date handling</TableCell>
            <TableCell>to do parse from string</TableCell>
            <TableCell>
                <Button variant="contained" color="secondary" size='small'>delete</Button>
            </TableCell>
        </TableRow>
    )
}

const useStyles = makeStyles(styles);


// Time to export! 🚚
export default Component;