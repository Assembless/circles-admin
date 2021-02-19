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
            <Box className={classes.top1}>
                <h2>Hello 'username'</h2>
                <h3>Thank you for your contribution in Assembless!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolores aut eaque nihil aperiam? Porro velit id odio, distinctio impedit at itaque laboriosam incidunt eum! Nemo doloremque nisi in, iure odio incidunt aperiam laudantium dolores molestias explicabo aspernatur? Ipsam, doloribus?</p>
            </Box>
            <Box className={classes.bottom1}>
                <h3>Circles Web in numbers</h3>
                <Box className={classes.statContainer}>kas</Box>
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