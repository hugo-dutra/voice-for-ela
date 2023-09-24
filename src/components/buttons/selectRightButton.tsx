import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useCard } from '../../store/CardProvider';

const SelectRightButton = () => {
  const context = useCard();
  const { cards, eyeCords, updateCards, redistributeCardsAfterElimination } = context;
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const rightXLimit = 2500;
  
  useEffect(() => {
    if (eyeCords.x > rightXLimit) {
      const newTimer = setTimeout(() => {
        console.log('right=>', eyeCords.x);
        const rightCards = cards.filter(card => card.side === 'right');
        updateCards(rightCards);
        redistributeCardsAfterElimination(rightCards);
      }, 3000);

      setTimer(newTimer);

    } else {
      if (timer) {
        clearTimeout(timer);
        setTimer(null);
      }
    }
  }, [eyeCords]);

  const handleSelectRight = () => {
    const rightCards = cards.filter(card => card.side === 'right');
    updateCards(rightCards);
    redistributeCardsAfterElimination(rightCards);
  };

  return (
    <>
      <Button variant="outlined" startIcon={<AddIcon />} onClick={handleSelectRight}>
        {eyeCords.x}
      </Button>
    </>
  );
};

export default SelectRightButton;
