import { createStyles } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: any) => createStyles({
    root: {
        height: '90vh',
        display: 'flex',
    },

    leftContainer: {
        width: '25%',
        minWidth: '300px',
        padding: '30px',
        borderRight: '4px solid #e0e0e0',
    },

    rightContainer: {
        flex: '1',
        minWidth: '300px',
        overflowY: 'scroll'
    },

    tableContainer: {

    },


    tableRow: {
        cursor: 'pointer',
    },

    head: {
        opacity: 0.5,
    },

    avatarContainer: {
        paddingRight: '0',
        paddingLeft: '2rem',
        width: '3%',
    },

    avatar: {
        height: '50px',
        width: '50px'
    },

    name: {
        fontSize: '16px',
        fontWeight: 600,
    },

    flags: {
        display: 'flex'
    }
}));