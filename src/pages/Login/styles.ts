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
        alignItems: 'center',
        padding: '50px 70px',
        borderRadius: '8px',
        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px'
    },

    logo: {
        width: '160px',
        marginBottom: '10px',
    },

    title: {
        fontWeight: 600,
        margin: '0 30px 30px 30px',
    },

    login: {
        marginBottom: '25px',
        width: '100%',
    },

    password: {
        width: '100%',
        marginBottom: '35px',
    },

    loginBtn: {
        width: '200px',
    },

    error: {
        marginBottom: '20px',
        width: '100%',
    },
}));

export default useStyles;