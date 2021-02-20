// Deps scoped imports.
import React from "react";
import { makeStyles, Box, Avatar, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";
import { Switch, Route, useHistory } from 'react-router-dom'

// Project scoped imports.
import { useCommand } from "api/hooks";
import { AccountList } from "api/commands";
import { useForkedState } from "utils/hooks/general";
import { isLoaded } from "api/utils";
import { IAccount } from "types";


// Component scoped imports.
import styles from "./styles";
import translations from "./trans";


const Users = (props: ComponentProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    const accountsRq = useCommand(AccountList, undefined);
    const [accounts] = useForkedState(rq => isLoaded(rq) ? rq.data as IAccount[] : null, accountsRq);

    if (!accounts) return <h4>Loading...</h4>;

    return <Box className={cx(classes.root, props.className)} style={props.style}>
        <Box className={classes.leftContainer}>
            <Switch>
                <Route exact path='/home/users' component={UserDetailsWelcome} />
                <Route exact path='/home/users/:id' component={(path: any) => <UserDetails accounts={accounts} path={path} />} />
            </Switch>
        </Box>
        <Box className={classes.rightContainer}>
            <Table>
                <TableHead>
                    <TableRow >
                        <TableCell></TableCell>
                        <TableCell ><h4 className={classes.categoryName}>Name</h4></TableCell>
                        <TableCell ><h4 className={classes.categoryName}>Username</h4></TableCell>
                        <TableCell ><h4 className={classes.categoryName}>Flags</h4></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {
                        accounts.map((acc, index) => <SingleAccount key={index
                        } accData={acc} />)
                    }
                </TableBody>
            </Table>
        </Box>
    </Box >
}

const UserDetailsWelcome = () => {
    return <div>userDetails</div>
}

const UserDetails = ({ accounts, path }: { accounts: IAccount[], path: any }) => {

    const account = accounts.find(acc => acc.id === path.match.params.id)

    if (!account) return <div>error</div>
    return (
        <>
            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <Avatar style={{ height: '110px', width: '110px', marginTop: '20px' }} alt='profile photo' src={account.avatar_url} />
                {account.details?.first_name && <h3>{account.details?.first_name}</h3>}
                <h4>{account.label}</h4>
            </Box>
            <Box>
                dska
            </Box>
        </>
    )
}

const SingleAccount = ({ accData }: { accData: IAccount }) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = (e: any) => {
        history.push(`/home/users/${accData.id}`)
    }

    return (
        <TableRow style={{ cursor: 'pointer' }} onClick={handleClick}>
            <TableCell className={classes.avatarContainer}>
                <Avatar className={classes.avatar} alt='profile photo' src={accData?.avatar_url} />
            </TableCell>
            <TableCell className={classes.name}>{accData.details?.first_name && accData.details?.first_name} {accData.details?.last_name && accData.details?.last_name}</TableCell>
            <TableCell>{accData.label}</TableCell>
            <TableCell ><Box className={classes.flags}>
                {accData.flags?.includes("verify_email") && <p>verify</p>}
                {accData.flags?.includes('needs_init') && <p>init</p>}
            </Box>
            </TableCell>
        </TableRow>
    )
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type ComponentProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Users;