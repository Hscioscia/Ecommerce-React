import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom'

export default function ActionAreaCard({data, id}) {
  return (
    <Card sx={{ maxWidth: 320}}>
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
          <Typography variant="body2" color="text.secondary">
            ${data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
        <Link to={`/item/${id}` }> Ver Mas </Link>
    </Card>
  );
}
