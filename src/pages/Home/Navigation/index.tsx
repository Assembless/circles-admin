import React from "react";
import { makeStyles, AppBar, Toolbar, Button, Box, Icon, Typography } from "@material-ui/core";
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
                            <Box className={classes.navLink} onClick={() => history.push('/home')}>
                                <Icon className={classes.navIcon}>home</Icon>
                                <Typography className={classes.navText}>Home</Typography>
                            </Box>
                            <Box className={classes.navLink} onClick={() => history.push('/home/users')}>
                                <Icon className={classes.navIcon}>people_alt</Icon>
                                <Typography className={classes.navText}>Users</Typography>
                            </Box>
                            <Box className={classes.navLink} onClick={() => history.push('/home/rooms')}>
                                <Icon className={classes.navIcon}>meeting_room</Icon>
                                <Typography className={classes.navText}>Rooms</Typography>
                            </Box>
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