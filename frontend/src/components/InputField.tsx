import { useState } from 'react';
import TextField from '@mui/material/TextField';

const  InputField = (props: any) => {

  return (
    <TextField
      label={props.label}
      id={props.id}
      multiline={props.multiline}
      rows={props.rows}
      error={props.error}
      fullWidth
      color='success'
      variant='outlined'
      margin='dense'
      sx={{backgroundColor: 'inherit', border: '2px solid #444444'}}
      value={props.value}
      onChange={props.onChange}
    

      InputLabelProps={{
        sx: {color: '#444444'}
        
      }}

      inputProps={{
        sx: {color: 'white', paddingLeft: '15px', fontSize: '20px'},
      }}
    />
  );
}

export default InputField;