import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height:130,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  cards: {
    width: 230,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Shippori Mincho B1, seri',
  },
  price: {
    fontSize: 15,
     color: '#800000',
  },
  button: {
    height: 30,
    background: '#800000',
    color: '#fff'
  }
}));
