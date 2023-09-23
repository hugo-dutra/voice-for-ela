import * as React from 'react';
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

const AddCardDialog: React.FC<CardDialogProps> = (props) => {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const context = useCard();

  const card: Card = {
    uuid: undefined,
    title: "",
    imageLink: "",
    side: "left"
  };

  const addCard = () => context?.addCard({
    ...card,
    uuid: uuidv4()
  });
  
  const handlerCardTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => card.title = event.target.value;
  const handleCardLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => card.imageLink = event.target.value;

  const handleCardSideChange = (event: SelectChangeEvent<"left" | "right">) => {
    card.side = event.target.value as "left" | "right";
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
          <Button onClick={addCard} autoFocus>
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddCardDialog;