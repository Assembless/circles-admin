// Deps scoped imports.
import React, { useState } from "react";
import { makeStyles, Box, Avatar, Table, TableHead, TableRow, TableCell, TableBody, Button, Icon, Typography } from "@material-ui/core";
import cx from "classnames";
import { Switch, Route, useHistory } from 'react-router-dom'

// Project scoped imports.
import { useCommand } from "api/hooks";
import { AccountList } from "api/commands";
import { useForkedState } from "utils/hooks/general";
import { isLoaded } from "api/utils";
import { IAccount } from "types";

import styles from "./styles";
import { type } from "os";


const Users = (props: ComponentProps) => {
    const classes = useStyles();

    const [showSidebar, setShowSidebar] = useState(false)

    const accountsRq = useCommand(AccountList, undefined);
    const [accounts] = useForkedState(rq => isLoaded(rq) ? rq.data as IAccount[] : null, accountsRq);

    if (!accounts) return <h4>Loading...</h4>;

    return <Box className={cx(classes.root, props.className)} style={props.style}>
        {showSidebar && <Box className={classes.sidebar} style={{ display: 'visible' }} >
            <Switch>
                <Route exact path='/home/users/:id' component={(path: any) => <UserDetails accounts={accounts} path={path} setShowSidebar={setShowSidebar} />} />
            </Switch>
        </Box>}
        <Box className={classes.tableContainer}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow >
                        <TableCell></TableCell>
                        <TableCell ><Typography variant='h4' className={classes.columnName}>Name</Typography></TableCell>
                        <TableCell ><Typography variant='h4' className={classes.columnName}>Username</Typography></TableCell>
                        <TableCell ><Typography variant='h4' className={classes.columnName}>Flags</Typography></TableCell>
                        <TableCell><Typography variant='h4' className={classes.columnName}>Action</Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {
                        accounts.map((acc, index) => <SingleAccount key={index
                        } accData={acc} setShowSidebar={setShowSidebar} />)
                    }
                </TableBody>
            </Table>
        </Box>
    </Box >
}


const UserDetails = ({ accounts, path, setShowSidebar }: { accounts: IAccount[], path: any, setShowSidebar: (show: boolean) => void }) => {
    const history = useHistory();
    const account = accounts.find(acc => acc.id === path.match.params.id)

    const closeSidebar = () => {
        setShowSidebar(false);
        history.push('/home/users');
    }

    if (!account) return <div>error</div>
    return (
        <>
            <Box >
                <Box style={{ textAlign: 'end' }}><Button onClick={closeSidebar}>close</Button></Box>
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Avatar style={{ height: '140px', width: '140px', marginTop: '20px' }} alt='profile photo' src={account.avatar_url} />
                    {account.details?.first_name && <Typography>{account.details?.first_name}</Typography>}
                    <Typography>{account.label}</Typography>
                </Box>
            </Box>
            <Box>

            </Box>
        </>
    )
}


const SingleAccount = ({ accData, setShowSidebar }: { accData: IAccount, setShowSidebar: (show: boolean) => void }) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = (e: any) => {
        history.push(`/home/users/${accData.id}`);
        setShowSidebar(true);
    }

    const handleBtnClick = (e: any) => {
        e.stopPropagation();
        console.log(accData.id)
    }

    return (
        <TableRow hover style={{ cursor: 'pointer' }} onClick={handleClick}>
            <TableCell className={classes.avatarContainer}>
                <Avatar className={classes.avatar} alt='profile photo' src={accData?.avatar_url} />
            </TableCell>
            <TableCell >{accData.details ? <Typography className={classes.name}>{accData.details?.first_name} {accData.details?.last_name}</Typography> : <Typography className={classes.notProvided}>Not provided</Typography>}</TableCell>
            <TableCell><Typography>{accData.label}</Typography></TableCell>
            <TableCell ><Box className={classes.flags}>
                <Typography>{accData.flags?.includes("verify_email") && 'verify'} {accData.flags?.includes('needs_init') && 'init'}</Typography>
            </Box>
            </TableCell>
            <TableCell >
                <Icon className={classes.trashIcon} color='secondary' onClick={handleBtnClick}>delete_forever</Icon>
            </TableCell>
        </TableRow>
    )
}

const useStyles = makeStyles(styles);

type ComponentProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Users;