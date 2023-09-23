import { FC, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectSideProps } from './types';

const SelectSide: FC<SelectSideProps> = (props) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="side-simple-select-standard-label">Lado</InputLabel>
      <Select
        labelId="side-simple-select-standard-label"
        id="side-simple-select-standard"  
        value={props.side}
        onChange={props.handleChange}
        label="Lado"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'left'}>Esquerda</MenuItem>
        <MenuItem value={'right'}>Direita</MenuItem>
      </Select>
    </FormControl>
  );
}
export default SelectSide;