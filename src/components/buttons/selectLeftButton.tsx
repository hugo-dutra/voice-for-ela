import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AddCardDialog from '../dialogs/AddCard';
import { useState } from 'react';

const SelectLeftButton = () => {
  
  const handleSelectLeft = () => {
    console.log("Select Left");
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