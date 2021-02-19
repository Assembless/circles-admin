// Deps scoped imports.
import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.


// Component scoped imports.
import styles from "./styles";
import translations from "./trans";


const Users = (props: ComponentProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();



    return <Box className={cx(classes.root, props.className)} style={props.style}>
        <h4 className={classes.h4}>users</h4>
    </Box>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type ComponentProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Users;