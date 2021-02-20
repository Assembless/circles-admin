import { createStyles } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: any) => createStyles({
    root: {

    },
    toolbar: {
        height: '10vh',
        boxShadow: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px'
    },

    logo: {
        height: '50px',
        marginRight: '4%',
        cursor: 'pointer',
    },

    navlink: {
        margin: '0 1.2%',
    }
}));