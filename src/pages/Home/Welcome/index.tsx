// Deps scoped imports.
import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

const Welcome = (props: ComponentProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    return <div className={cx(classes.root, props.className)} style={props.style}>
        <Box className={classes.container1}>

            <h1>Circles-Web</h1>
            <Box className={classes.top1}>
                dsjajds
            </Box>
            <Box>
                <h3>Circles Web</h3>
            </Box>
        </Box>
        <Box className={classes.container2}>
            <h2>Circles Web</h2>
        </Box>
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
export default Welcome;