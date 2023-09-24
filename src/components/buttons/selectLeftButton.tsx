import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useCard } from '../../store/CardProvider';

const SelectLeftButton = () => {
  const context = useCard();
  const { cards, eyeCords, updateCards, redistributeCardsAfterElimination } = context;
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const LeftXLimit = 100;


  useEffect(() => {
    if (eyeCords.x < LeftXLimit) {
      const newTimer = setTimeout(() => {
        console.log('left=>', eyeCords.x);
        const leftCards = cards.filter(card => card.side === 'left');
        updateCards(leftCards);
        redistributeCardsAfterElimination(leftCards);
      }, 3000);

      setTimer(newTimer);

    } else {
      if (timer) {
        clearTimeout(timer);
        setTimer(null);
      }
    }
  }, [eyeCords]);

  const handleSelectLeft = () => {
    const leftCards = cards.filter(card => card.side === 'left');
    updateCards(leftCards);
    redistributeCardsAfterElimination(leftCards);
  };

  return (
    <>
      <Button variant="outlined" startIcon={<AddIcon />} onClick={handleSelectLeft}>
        {eyeCords.x}
      </Button>
    </>
  );
};

export default SelectLeftButton;
