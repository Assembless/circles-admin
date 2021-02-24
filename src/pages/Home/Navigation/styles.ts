import { createStyles } from "@material-ui/core/styles";

export default ((theme: any) => createStyles({
    root: {

    },
    toolbar: {
        height: '10vh',
        boxShadow: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    navContainer: {
        display: 'flex',
        alignItems: 'center'
    },

    logo: {
        height: '43px',
        marginRight: '3vw',
        cursor: 'pointer',
    },

    navLinks: {
        display: 'flex',
        alignItems: 'center',

    },

    navIcon: {
        marginRight: '5px',
        color: '#449ee2',
    },

    navText: {
        opacity: 0.8,
        fontSize: '14px',
    },

    navLink: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        marginRight: '1.5rem',
        transition: '0.1s ease',
        fontSize: '14px',
        textTransform: 'uppercase',
        letterSpacing: '0.6px',

        '&:hover': {
            color: '#449ee2',
        }
    }

}));