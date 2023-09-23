import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { CardDialogProps } from './types';
import { Card, useCard } from '../../../store/CardProvider';
import { Grid, SelectChangeEvent, TextField } from '@mui/material';
import SelectSide from '../../selects/selectSide';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '../../../hooks/useLocalStorage';

const AddCardDialog: React.FC<CardDialogProps> = (props) => {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const context = useCard();
  const [storageValue, setStorageValue] = useLocalStorage<Card[]>("cards", []);

  const [card, setCard] = useState<Card>({
    uuid: undefined,
    title: "",
    imageLink: "",
    side: "left"
  });


  const addCard = () => context?.addCard(card);

  const handlerCardTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => setCard({ ...card, title: event.target.value });
  const handleCardLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => setCard({ ...card, imageLink: event.target.value });
  const handleCardSideChange = (event: SelectChangeEvent<"left" | "right">) => {
    setCard({ ...card, side: event.target.value as "left" | "right" });
  }

  const persistCards = () => {
    const newUuid = uuidv4();
    setCard({ ...card, uuid: newUuid })
    setStorageValue([...storageValue, { ...card, uuid: newUuid }]);
    addCard();
  }


  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Adicionar Card"}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} direction="column">
            <Grid item >
              <TextField id="standard-basic" label="Nome da Imagem" variant="standard" onChange={handlerCardTitleChange} fullWidth />
            </Grid>
            <Grid item >
              <TextField id="standard-basic" label="Link da imagem" variant="standard" onChange={handleCardLinkChange} fullWidth />
            </Grid>
            <Grid item >
              <SelectSide side={card.side} handleChange={handleCardSideChange} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.onClose} >
            Fechar
          </Button>
          <Button onClick={persistCards} autoFocus>
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddCardDialog;