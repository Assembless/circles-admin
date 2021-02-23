import React from "react";
import { makeStyles, AppBar, Toolbar, Button, Box } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import styles from "./styles";
import logo from 'assets/circles-logo.svg'


const Navigation = () => {
    const classes = useStyles();
    const history = useHistory();


    const handleLogOut = () => {
        localStorage.removeItem('token');
        history.push('/');
    }

    return (
        <>
            <AppBar elevation={0} position='static' color='transparent' >
                <Toolbar className={classes.toolbar}>
                    <Box className={classes.navContainer} >
                        <img className={classes.logo} src={logo} onClick={() => history.push('/home')} />
                        <Box className={classes.navLinks}>
                            <p className={classes.navlink} onClick={() => history.push('/home')}>Home</p>
                            <p className={classes.navlink} onClick={() => history.push('/home/users')}>Users</p>
                            <p className={classes.navlink} onClick={() => history.push('/home/rooms')}>Rooms</p>
                        </Box>
                    </Box>
                    <Button variant='outlined' color='secondary' size='small' onClick={handleLogOut}>logout</Button>
                </Toolbar>
            </AppBar>
        </>)
}

const useStyles = makeStyles(styles);

// Time to export! 🚚
export default Navigation;