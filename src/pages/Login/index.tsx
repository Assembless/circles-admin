import React from 'react'
import { TextField, Box } from '@material-ui/core';
import cx from "classnames";
import useStyles from "./styles"

const Login = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.loginContainer}>
                <h2>Circles Administration Panel</h2>
                <TextField className={classes.login} id="label" label="Label" variant="outlined" />
                <TextField className={classes.password} id="label" label="Label" variant="outlined" />
            </div>
        </div>
    )
}

export default Login;