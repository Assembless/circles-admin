import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '30px 40px',
        borderRadius: '8px',
        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px'
    },

    topContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
    },

    logo: {
        width: '60px',
        marginBottom: '15px',
    },

    title: {
        fontWeight: 600,
        fontSize: '18px',
        margin: '0 20px',
    },

    login: {

    },

    password: {
        marginTop: '15px',
    },

    btnContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    },

    loginBtn: {
        width: '150px',
    },

    error: {
        marginTop: '10px',
    },
}));

export default useStyles;