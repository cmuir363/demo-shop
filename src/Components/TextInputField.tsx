import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { SxProps } from '@mui/material';

interface TextInputFieldProps {
  label: string
  type?: string
  sxBox?: SxProps
  sxTextField?: SxProps
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export default function TextInputField(props: TextInputFieldProps) {
  const { label, sxBox, sxTextField, onChangeHandler, type } = props

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={sxBox}
    >
      <TextField 
        id="outlined-basic" 
        label={label} 
        variant="outlined" 
        sx={sxTextField}
        onChange={onChangeHandler}
        type={type}
      />
    </Box>
  );
}