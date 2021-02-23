import { createStyles } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: any) => createStyles({
    root: {
        height: '88vh',
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: '#f2f2f2',
    },

    container1: {
        flex: '1',
        minWidth: '300px',
        padding: '30px',
    },

    top1: {
        boxShadow: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
        padding: '30px',
        marginBottom: '30px',
        borderRadius: '4px',
        backgroundColor: '#fff',
    },

    bottom1: {
        boxShadow: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
        padding: '30px',
        borderRadius: '4px',
        backgroundColor: '#fff',
    },

    statContainer: {
        height: '130px',
        borderRadius: '8px',
        display: 'flex',
    },

    statistic: {
        marginRight: '15px'
    },

    container2: {
        flex: '1',
        padding: '30px',
    },
}));