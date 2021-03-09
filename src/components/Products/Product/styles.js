import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    width: '250px',
    height: '284px',
    boxShadow: '5px 5px 10px 2px rgb(0 0 0 /20%)',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Shippori Mincho B1 serif',
  },
  price: {
    color: '#800000',
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    color: '#800000',
    // background: '#BCC6CC',
    height: 40,
    width: 40,
    position: 'relative',
    bottom: 6,
  },
  desc: {
    textAlign: 'center',
    position: 'relative',
    bottom: 6,
    fontSize: 14,
    fontFamily: 'Playfair Display, serif',
  },
  line: {
    border: 0,
    height: '1px',
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), #BCC6CC, rgba(0, 0, 0, 0))',
    position: 'relative',
    bottom: 8,
  }
}));
