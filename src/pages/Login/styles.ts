import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    loginContainer: {
        display: 'flex',
        flexDirection: 'column',
    },

    login: {
        marginBottom: '20px'
    },

    password: {

    },
}));

export default useStyles;