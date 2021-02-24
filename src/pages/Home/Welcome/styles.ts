import { createStyles } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: any) => createStyles({
    root: {
        height: '88vh',
        backgroundColor: '#f2f2f2',
        padding: '40px 20px',
        overflowY: 'scroll',
    },

    title: {
        fontSize: '120px',
        fontWeight: 'bold',
        letterSpacing: '1px',
        opacity: '0.08',
        textAlign: 'center',
        marginBottom: '30px',
    },

    iconContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    icon: {
        fontSize: '90px',
        color: '#449ee2',
    },

    number: {
        fontSize: '152px',
        color: '#fff',
        fontWeight: 600,
        lineHeight: '1',
        textShadow: '3px 4px 7px rgba(0,0,0,0.3)'

    },

}));