import React from "react";
import { makeStyles, Box, Icon, Typography } from "@material-ui/core";
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
        <Typography variant='h2' className={classes.title}>Our numbers</Typography>
        <Box display='flex' justifyContent='center' >
            <Box className={classes.iconContainer} margin='0 50px'>
                <Icon className={classes.icon}>people_alt</Icon>
                <Typography className={classes.number}>{accounts?.length}</Typography>
            </Box>
            <Box className={classes.iconContainer} margin='0 50px'>
                <Icon className={classes.icon}>meeting_room</Icon>
                <Typography className={classes.number}>{rooms?.length}</Typography>
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