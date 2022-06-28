import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount'

export default function ActionAreaCard({img, img2, stock, id, category, name, description, price}) {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height=""
          image={img}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${price}
          </Typography>        
        </CardContent>
      </CardActionArea>
      <CardActions>
        { <ItemCount stock={5} initial={1} /> }  
      </CardActions>
    </Card>
  );
}
