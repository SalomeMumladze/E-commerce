import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div>
          <Typography className={classes.name}>
            {product.name}
          </Typography>
          <Typography className={classes.desc} dangerouslySetInnerHTML={{ __html: product.description }} color="textSecondary" component="p" />     
        </div>
        <hr className={classes.line}/>
        <div  className={classes.cardContent}>
          <Typography gutterBottom className={classes.price}>
            ${product.price.formatted}
          </Typography>
          <IconButton className={classes.button} aria-label="Add to Cart" onClick={handleAddToCart}>
            <AddShoppingCart />
          </IconButton>
        </div>
        </CardContent>
    </Card>
  );
};

export default Product;

