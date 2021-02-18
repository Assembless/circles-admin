import { createStyles } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: any) => createStyles({
    root: {
        height: '100vh',

    },
    toolbar: {
        height: '10vh',
        color: theme.palette.primary
    }
}));