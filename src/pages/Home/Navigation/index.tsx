// Deps scoped imports.
import React from "react";
import { makeStyles, AppBar, Toolbar, Button } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.
import { useHistory } from 'react-router-dom';
// Component scoped imports.
import styles from "./styles";
import translations from "./trans";
import logo from '../../../assets/circles-logo.svg'


const Navigation = (props: ComponentProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <AppBar elevation={0} position='static' color='transparent' >
                <Toolbar className={classes.toolbar}>
                    <img className={classes.logo} src={logo} onClick={() => history.push('/home')} />
                    <Button className={classes.navlink} variant="contained" color="secondary" onClick={() => history.push('/home')}>Home</Button>
                    <Button className={classes.navlink} variant="contained" color="secondary" onClick={() => history.push('/home/users')}>Users</Button>
                    <Button className={classes.navlink} variant="contained" color="secondary" onClick={() => history.push('/home/rooms')}>Rooms</Button>
                </Toolbar>
            </AppBar>
        </>)
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type ComponentProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Navigation;