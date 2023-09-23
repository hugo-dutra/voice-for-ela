import { FC } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import EditIcon from '@mui/icons-material/Edit';
import { CardProps } from './types';
import { CardContainer } from './style';
import { Card as CardFromProvider, useCard } from '../../store/CardProvider';
import useLocalStorage from '../../hooks/useLocalStorage';

const ImageCard: FC<CardProps> = (props) => {

  const context = useCard();
  const { cards, updateCards } = context || { cards: [] };
  const [storageValue, setStorageValue] = useLocalStorage<CardFromProvider[]>("cards", []);


  const handleRemoveCard = (props: CardProps) => {
    const newCards = cards.filter(card => card.uuid !== props.uuid);
    setStorageValue(newCards);
    updateCards(newCards);
  }

  return (
    <CardContainer>
      <Card>
        <CardActions disableSpacing>
          <div style={{ cursor: 'pointer' }}>
            <EditIcon onClick={() => handleRemoveCard(props)} />
          </div>
        </CardActions>
        <CardMedia
          component="img"
          height={props.imageProps?.height || "110"}
          image={props.imageProps?.src || "https://mui.com/static/images/cards/paella.jpg"}
          alt={props.imageProps?.alt}
        />
      </Card>
    </CardContainer>
  );
}

export default ImageCard;