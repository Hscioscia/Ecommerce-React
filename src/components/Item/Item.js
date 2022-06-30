import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom'
import '../Item/Item.css'

export default function ActionAreaCard({data}) {
  return (
    <Card sx={{ maxWidth: 340}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height=""
          image={data.img}
          alt={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.primary">
            ${data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
        <Link className='btn-info' to={`/item/${data.id}` }> Ver Mas </Link>
    </Card>
  );
}
