import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    contain: {
        marginTop: 190,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    container: {
        width: 700, 
        textAlign: 'center',
        fontSize: 24,
        textDecoration: 'underline',
        marginBottom: 30,
        fontFamily: 'Shippori Mincho B1, seri',
    },
    about: {
        width: 700,
        lineHeight: 2,
        fontFamily: 'Shippori Mincho B1, seri',
    }
}));