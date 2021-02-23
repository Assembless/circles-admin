import { createStyles } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: any) => createStyles({
    root: {
        height: '90vh',
        display: 'flex',
        backgroundColor: '#f2f2f2',
    },

    sidebar: {
        width: '25%',
        minWidth: '300px',
        padding: '30px',
        boxShadow: ' 4px 3px 7px 0 rgba(0, 0, 0, 0.15)',
        backgroundColor: '#fff',
    },

    tableContainer: {
        display: 'flex',
        justifyContent: 'center',
        flex: '1',
        minWidth: '300px',
        overflowY: 'scroll',
    },

    table: {
        width: '90%',
        backgroundColor: '#fff',
    },

    tableRow: {
        cursor: 'pointer',
    },

    categoryName: {
        opacity: 0.5,
        margin: '0'
    },

    avatarContainer: {
        paddingRight: '0px',
        paddingLeft: '2rem',
        width: '3%',
    },

    avatar: {
        height: '50px',
        width: '50px',
        border: `3px solid #449ee2`
    },

    name: {
        fontSize: '16px',
        fontWeight: 600,
    },

    notProvided: {
        opacity: 0.4,
        textTransform: 'uppercase',
        fontSize: '14px',
    },

    flags: {
        display: 'flex'
    }
}));