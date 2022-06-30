import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../ItemDetail/ItemDetail.css';

const ItemDetail = ({img, img2, stock, id, category, name, description, price}) => {
const [quantity, setQuantity] = useState(0);

const onAdd = (number) => {
  number !== 0

    ? setQuantity(quantity + number)
    : alert("No agregaste ningun producto");
};

  return (
  <div className='detailContainer'>
    <Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height=""
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography variant="body1" color="text.primary">
            {description}
          </Typography>    
        </CardContent>
      </CardActionArea>
      <Typography className="price" variant="body3" color="text.primary">
            Precio: ${price}
          </Typography>      
          <Typography className="stock" variant="body3" color="text.primary">
            Stock: {stock}
          </Typography> 
      <CardActions>
      </CardActions>
      <div className='counter-section'>
        { quantity === 0 ? <ItemCount stock={stock} initial={1} onAdd={onAdd} /> : <Link to= "/cart" className='btn-buy' >Terminar Compra </Link>} 
      </div>
    </Card>
  </div>
  );
};

export default ItemDetail;
