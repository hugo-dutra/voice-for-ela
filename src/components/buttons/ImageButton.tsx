import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AddCardDialog from '../dialogs/AddCard';
import { useState } from 'react';

const ImageButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <>
      <Button variant="outlined" startIcon={<AddIcon />} onClick={() => setDialogOpen(true)}  >
        Add Card
      </Button>

      {dialogOpen && <AddCardDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        setOpen={setDialogOpen} />}
    </>
  );
}
export default ImageButton