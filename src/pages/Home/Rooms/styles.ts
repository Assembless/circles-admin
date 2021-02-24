import { createStyles } from "@material-ui/core/styles";

export default ((theme: any) => createStyles({
    root: {
        paddingTop: '40px',
        backgroundColor: '#f2f2f2',
        display: 'flex',
        justifyContent: 'center',
    },

    table: {
        width: '92%',
        backgroundColor: '#fff',
    },

    columnName: {
        fontSize: '14px',
        fontWeight: 'bold',
        opacity: 0.4,
        margin: '0'
    },

    trashIcon: {
        fontSize: '30px',
    },
}));