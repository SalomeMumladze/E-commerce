import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar:{ 
    padding: 30,
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 90,
    },
  },
  title: {
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Shippori Mincho B1, seri',
  },
  sub: {
    fontFamily: 'Shippori Mincho B1, seri',
  },
  line: {
    border: 0,
    height: '1px',
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), #BCC6CC, rgba(0, 0, 0, 0))',
    position: 'relative',
    bottom: 8,
    marginTop: 30,
    marginBottom: 40
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '5%',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 70,
  },
  container: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  contain: {
    paddingLeft: 50,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 24
    },
  },
  button: {
    background: '#800000',
    color: '#fff'
  }
}));
