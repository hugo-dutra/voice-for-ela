import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useCard } from '../../store/CardProvider';
import { useEffect } from 'react';

const SelectLeftButton = () => {

  const context = useCard();
  const { cards, updateCards, redistributeCardsAfterElimination } = context;

  const handleSelectLeft = () => {
    const leftCards = cards.filter(card => card.side === 'left');
    updateCards(leftCards);
    redistributeCardsAfterElimination(leftCards);
  }

  return (
    <>
      <Button variant="outlined" startIcon={<AddIcon />} onClick={handleSelectLeft}  >
        Selecionar Esquerda
      </Button>
    </>
  );
}
export default SelectLeftButton;