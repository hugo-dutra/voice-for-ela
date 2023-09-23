import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AddCardDialog from '../dialogs/AddCard';
import { useState } from 'react';

const SelectRightButton = () => {
  
  const handleSelectRight = () => {
    console.log("Select Right");
  }

  return (
    <>
      <Button variant="outlined" startIcon={<AddIcon />} onClick={handleSelectRight}  >
        Selecionar Esquerda
      </Button>
    </>
  );
}
export default SelectRightButton;