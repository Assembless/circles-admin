// Deps scoped imports.
import React from "react";
import { makeStyles, AppBar, Toolbar, Button } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";


const Navigation = (props: ComponentProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    return (
        <>
            <AppBar position='static' >
                <Toolbar className={classes.toolbar}>
                    <Button variant="contained" color="secondary" >Home</Button>
                    <Button variant="contained" color="secondary" >Users</Button>
                    <Button variant="contained" color="secondary" >Rooms</Button>
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