import React, { useState, useRef } from 'react'
import { TextField, Box, Button } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import useStyles from "./styles"
import logo from '../../assets/circles-logo.svg'

const Login = () => {

    const history = useHistory();
    const classes = useStyles();

    const [inputValues, setInputValues] = useState({ username: '', password: '' })
    const [errors, setErrors] = useState({ username: '', password: '' })

    const handleChange = (e: any) => {
        setInputValues({ ...inputValues, [e.target.id]: e.target.value })
        setErrors({ username: '', password: '' })
    }

    const handleSubmit = () => {

        const errorsData = validate(inputValues)
        if (!errorsData.username && !errorsData.password) {
            history.push('/home')
        }
        else {
            setErrors(errorsData)
        }
    }

    return (
        <div className={classes.root}>
            Home
            <form className={classes.formContainer}>
                <Box className={classes.topContainer}>
                    <img className={classes.logo} src={logo} alt='logo' />
                    <h2 className={classes.title}>Circles Administration Panel</h2>
                </Box>
                <TextField className={classes.login} id="username" label="Login" variant="outlined" value={inputValues.username} onChange={handleChange} />
                {errors.username && <Alert className={classes.error} severity="error">{errors.username}</Alert>}
                <TextField className={classes.password} type='password' id="password" label="Password" variant="outlined" value={inputValues.password} onChange={handleChange} />
                {errors.password && <Alert className={classes.error} severity="error">{errors.password}</Alert>}
                <Box className={classes.btnContainer}>
                    <Button className={classes.loginBtn} variant='contained' onClick={handleSubmit}>login</Button>
                </Box>
            </form>
        </div >
    )
}



const validate = (values: TFormInputs) => {

    const { REACT_APP_LOGIN, REACT_APP_PASSWORD } = process.env

    const errors = { username: '', password: '' };

    if (values.username && values.username !== REACT_APP_LOGIN) {
        errors.username = 'Username is invalid.'
    }
    if (!values.username) {
        errors.username = 'Username is required.';
    }
    if (values.password && values.password !== REACT_APP_PASSWORD) {
        errors.password = 'Password is invalid.'
    }
    if (!values.password) {
        errors.password = 'Password is required.';
    }

    return errors;
}

type TFormInputs = {
    username: string;
    password: string;
}


export default Login;