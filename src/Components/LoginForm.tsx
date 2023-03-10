import React, { useContext }  from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextInputField from './TextInputField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { StateContext } from '../App';
import Auth from '../utils/Auth'

  

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    minWidth: "20em"
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}
const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

interface LoginFormProps {
    
}


const LoginForm = (props: LoginFormProps) => {
  const [open, setOpen] = React.useState(false);
  const { user, setUser } = useContext(StateContext)
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 
  const handleUsernameChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleLogin = () => {
    const result = Auth.logIn(username, password)
    setUser(result.user)
    console.log(result)
    setOpen(false)
  }

  const handleLogOut = () => {
    setUser(null)
    Auth.logOut()
}

  let MenuItemComponent = null
  if (user) {
    MenuItemComponent = (
        <MenuItem onClick={handleLogOut}>
            Log Out
        </MenuItem>
    )
  } else {
    MenuItemComponent = (
        <MenuItem onClick={handleClickOpen}>
            Log In
        </MenuItem>
    )
  }


  return (
    <div>
      {MenuItemComponent}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Log In
        </BootstrapDialogTitle>
        <DialogContent dividers>
            <TextInputField 
            label="Username" 
            sxBox={{marginBottom: 2, marginTop: 3}} 
            sxTextField={{width: "100%"}}
            onChangeHandler={handleUsernameChange}
            />
            <TextInputField 
                label="Password"
                sxBox={{marginBottom: 3}} 
                sxTextField={{width: "100%"}} 
                onChangeHandler={handlePasswordChange}
                type="password"
            />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleLogin}>
            Log in
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default LoginForm