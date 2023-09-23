import { FC } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import EditIcon from '@mui/icons-material/Edit';
import { CardProps } from './types';
import { CardContainer } from './style';

const ImageCard: FC<CardProps> = (props) => {
  return (
    <CardContainer>
      <Card>
        <CardActions disableSpacing>
          <div style={{ cursor: 'pointer' }}>
            <EditIcon onClick={() => alert(props.title)} />
          </div>
        </CardActions>
        <CardMedia
          component="img"
          height={props.imageProps?.height}
          image={props.imageProps?.src || "https://mui.com/static/images/cards/paella.jpg"}
          alt={props.imageProps?.alt}
        />
      </Card>
    </CardContainer>
  );
}

export default ImageCard;