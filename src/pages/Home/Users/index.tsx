// Deps scoped imports.
import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

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

    const accountsRq = useCommand(AccountList, undefined, 5);
    const [accounts] = useForkedState(rq => isLoaded(rq) ? rq.data as IAccount[] : null, accountsRq);
    console.log(accounts);

    if (!accounts) return <h4>Loading...</h4>;

    return <Box className={cx(classes.root, props.className)} style={props.style}>
        <h4 className={classes.h4}>users</h4>
        {
            accounts.map(account => <p key={account.id}>{account.label}</p>)
        }
    </Box>
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