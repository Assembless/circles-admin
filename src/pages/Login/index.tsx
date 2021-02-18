import React, { useState } from 'react'
import { TextField, Box, Button } from '@material-ui/core';
import cx from "classnames";
import useStyles from "./styles"

const Login = () => {
    const classes = useStyles();

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    const handleChange = (e: any) => {
        const value = e.target.value
        const id = e.target.id;
        switch (id) {
            case 'login':
                setLogin(value);
                break;
            case 'password':
                setPassword(value);
                break;
        }
    }

    const handleLogin = () => {
        console.log('login')
    }

    return (
        <div className={classes.root}>
            <div className={classes.loginContainer}>
                <h2>Circles Administration Panel</h2>
                <TextField className={classes.login} id="login" label="login" variant="outlined" value={login} onChange={handleChange} />
                <TextField className={classes.password} id="password" label="Password" variant="outlined" value={password} onChange={handleChange} />
                <Button variant='contained' onClick={handleLogin}>login</Button>
            </div>
        </div>
    )
}

export default Login;