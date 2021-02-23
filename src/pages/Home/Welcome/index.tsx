import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import cx from "classnames";
import styles from "./styles";
import { useCommand } from 'api/hooks';
import { AccountList, RoomList } from 'api/commands';
import { useForkedState } from 'utils/hooks/general';
import { isLoaded } from 'api/utils';
import { IRoom, IAccount } from 'types';


const Welcome = (props: ComponentProps) => {
    const classes = useStyles();

    const roomsRq = useCommand(RoomList);
    const [rooms] = useForkedState(rq => isLoaded(rq) ? rq.data as IRoom[] : null, roomsRq);
    const accountsRq = useCommand(AccountList, undefined);
    const [accounts] = useForkedState(rq => isLoaded(rq) ? rq.data as IAccount[] : null, accountsRq);


    return <div className={cx(classes.root, props.className)} style={props.style}>
        <Box className={classes.container1}>
            <Box className={classes.top1}>
                <h2>Hello &apos;username&apos;</h2>
                <h3>Thank you for your contribution in Assembless!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolores aut eaque nihil aperiam? Porro velit id odio, distinctio impedit at itaque laboriosam incidunt eum! Nemo doloremque nisi in, iure odio incidunt aperiam laudantium dolores molestias explicabo aspernatur? Ipsam, doloribus?</p>
            </Box>
        </Box>
        <Box className={classes.container2}>
            <Box className={classes.bottom1}>
                <h3>Our numbers</h3>
                <Box className={classes.statContainer}>
                    <Box className={classes.statistic}><h4>Users</h4>{accounts?.length}</Box>
                    <Box className={classes.statistic}><h4>Rooms</h4>{rooms?.length}</Box>
                </Box>
            </Box>
        </Box>
    </div>
}

const useStyles = makeStyles(styles);

type ComponentProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Welcome;