import React from 'react';
import { IData } from 'types';
import { Wrap, Title } from './style';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { ReactComponent as IconClose } from 'assets/icons/close.svg';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface Props {
  open: boolean;
  value: IData;
  handleClose: () => void;
}

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
          <IconClose />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const Modal = ({ open, value, handleClose }: Props) => {
  const { url, rated, type, score, title, synopsis, members } = value;
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        {title}
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Title>Description:</Title>
        <Typography gutterBottom>{synopsis}</Typography>
        <Wrap>
          <Title>Members:</Title>
          <Typography gutterBottom>{members}</Typography>
          <Title>Rated:</Title>
          <Typography gutterBottom>{rated}</Typography>
        </Wrap>
        <Wrap>
          <Title>Score:</Title>
          <Typography gutterBottom>{score}</Typography>
          <Title>Type:</Title>
          <Typography gutterBottom>{type}</Typography>
        </Wrap>
        <Title>Get more info:</Title>
        <Typography gutterBottom>
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </Typography>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default Modal;
