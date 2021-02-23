// Deps scoped imports.
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";
import { Switch, Route } from 'react-router-dom'

// Project scoped imports.
import styles from "./styles";
import translations from "./trans";

//components
import Navigation from './Navigation/index';
import Welcome from './Welcome/index';
import Users from './Users/index';
import Rooms from './Rooms/index';
import Login from '../Login/index';
import { useToken } from '../../utils/hooks/general';


const Home = (props: ComponentProps) => {
    const classes = useStyles();

    const { token, setToken } = useToken();

    if (!token) return <Login setToken={setToken} />

    return <div className={cx(classes.root, props.className)} style={props.style}>
        <Navigation />
        <Switch>
            <Route exact path='/home' component={Welcome} />
            <Route path='/home/users' component={Users} />
            <Route path='/home/rooms' component={Rooms} />
        </Switch>
    </div>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type ComponentProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Home;