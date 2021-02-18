// Deps scoped imports.
import React from "react";
import { makeStyles } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";
import { Switch, Route } from 'react-router-dom'

// Project scoped imports.
import styles from "./styles";
import translations from "./trans";
import Navigation from './Navigation/index';
import Welcome from './Welcome/index'
import Users from './Users/index'

/**
 * Home component
 * @description This is the main view.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */

const Home = (props: ComponentProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    return <div className={cx(classes.root, props.className)} style={props.style}>
        <Navigation />
        <Switch>
            <Route exact path='/home' component={Welcome} />
            <Route exact path='/home/users' component={Users} />
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