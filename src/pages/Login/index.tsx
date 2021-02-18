import React, { useState } from 'react'
import { TextField, Box, Button } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import useStyles from "./styles"

const Login = () => {

    const history = useHistory();
    const classes = useStyles();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e: any) => {
        const value = e.target.value
        const id = e.target.id;
        switch (id) {
            case 'login':
                setLogin(value);
                setError(false);
                break;
            case 'password':
                setPassword(value);
                setError(false);
                break;
        }
    }

    const { REACT_APP_LOGIN, REACT_APP_PASSWORD } = process.env

    const handleSubmit = () => {
        if (login === REACT_APP_LOGIN && password === REACT_APP_PASSWORD) {
            history.push('/');
        }
        else {
            setError(true);
        }
    }

    return (
        <div className={classes.root}>
            <form className={classes.loginContainer}>
                <h2>Circles Administration Panel</h2>
                <Box>
                    <TextField className={classes.login} id="login" label="Login" variant="outlined" value={login} onChange={handleChange} />
                </Box>
                <Box>
                    <TextField className={classes.password} type='password' id="password" label="Password" variant="outlined" value={password} onChange={handleChange} />
                </Box>
                <Button variant='contained' onClick={handleSubmit}>login</Button>
            </form>
        </div>
    )
}
/* 
const DisplayError = ({ fieldName, error, value }: { fieldName: string, error: boolean, value: string }) => {
    if (!error) return null;
    return (<>
        {error && !value && <Alert style={{ margin: " 15px 0" }} severity="error">
            <AlertTitle>Upps...</AlertTitle>
            {fieldName} is required</Alert>}
        {error && value && <Alert style={{ margin: " 15px 0" }} severity="error">
            <AlertTitle>Upps...</AlertTitle>
            {fieldName} wrong value</Alert>}
    </>)
}
 */
export default Login;