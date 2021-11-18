import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const ModalContainer = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface ModalTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const ModalTitle = (props: ModalTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
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
    </DialogTitle>
  );
};

interface ModalProps {
  isOpen: boolean;
  title?: string;
  content: React.FC;
  ariaName: string;
  onClose: () => void;
  onClosed?: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onClosed, content: Content, title, ariaName }) => (
  <ModalContainer
    onClose={onClose}
    aria-labelledby={`${ariaName}-modal`}
    open={isOpen}
    onTransitionEnd={() => !isOpen && onClosed && onClosed()}
  >
    <ModalTitle id={`${ariaName}-modal`} onClose={onClose}>
      {title}
    </ModalTitle>
    <DialogContent dividers>
      <Content />
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={onClose}>
        Close
      </Button>
    </DialogActions>
  </ModalContainer>
);

export default Modal;
