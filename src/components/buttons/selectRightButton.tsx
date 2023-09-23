import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useCard } from '../../store/CardProvider';

const SelectRightButton = () => {

  const context = useCard();
  const { cards, updateCards, redistributeCardsAfterElimination } = context;

  const handleSelectRight = () => {
    const rightCards = cards.filter(card => card.side === 'right');
    updateCards(rightCards);
    redistributeCardsAfterElimination(rightCards);
  }

  return (
    <>
      <Button variant="outlined" startIcon={<AddIcon />} onClick={handleSelectRight}  >
        Selecionar Direita
      </Button>
    </>
  );
}
export default SelectRightButton;