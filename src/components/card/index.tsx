import { FC } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { CardProps } from './types';
import { CardContainer } from './style';

const ImageCard: FC<CardProps> = (props) => {
  return (
    <CardContainer>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={props.title}
        />
        <CardMedia
          component="img"
          height={props.imageProps?.height || 200}
          image={props.imageProps?.src || "https://mui.com/static/images/cards/paella.jpg"}
          alt={props.imageProps?.alt}
        />
        <CardContent>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="edit image" onClick={props.buttonAction}>
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
    </CardContainer>
  );
}

export default ImageCard;