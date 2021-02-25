import { createStyles } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: any) => createStyles({
    root: {
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
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
        marginTop: '40px',
        width: '92%',
        backgroundColor: '#fff',
    },

    tableRow: {
        cursor: 'pointer',
    },

    columnName: {
        fontSize: '14px',
        fontWeight: 'bold',
        opacity: 0.4,
        margin: '0'
    },

    avatarContainer: {
        padding: '10px 4rem 10px  0',
        paddingRight: '0px',
        paddingLeft: '2rem',
        width: '3%',
    },

    avatar: {
        height: '50px',
        width: '50px',
        border: `3.5px solid #449ee2`
    },

    name: {
        fontSize: '16px',
        fontWeight: 'bold'
    },

    notProvided: {
        opacity: 0.4,
        textTransform: 'uppercase',
        fontSize: '14px',
    },

    flags: {
        display: 'flex'
    },

    trashIcon: {

    },

    detailsContainer: {

    },

    detailContainer: {
        flex: '1',
        borderBottom: '2px solid #f2f2f2',
        marginLeft: '8%',
    },

    detailTitle: {
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#449ee2',
        marginBottom: '2px',
    },

    detail: {
        fontWeight: 'bold',
        marginBottom: '4px',
    },
}));