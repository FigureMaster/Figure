import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './modal.scss';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Menu, MenuProps as MuiMenuProps } from '@mui/material';
import { orange } from '@mui/material/colors';

export const Modal = (props: any) => {
    const descriptionElementRef = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
        if (props.open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [props.open]);

    return (
        <div>
            <Dialog open={props.open} onClose={props.onClose} scroll="body" aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
                <DialogContent dividers={false}>
                    <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}></DialogContentText>
                    <CloseIcon onClick={props.onClose} className="modal-close" />
                    {props.children}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export const Dropdown = ({ open, ...props }: MuiMenuProps) => {

    return (
        <Menu open={open} {...props}>
            {props.children}
        </Menu>
    );
};

interface CustomAlertProps {
    open: boolean;
    onClose: () => void;
    message: string;
    title: string;
}

export const Alert = (props: CustomAlertProps) => {
    return (
        <div>
            <Dialog open={props.open} onClose={props.onClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    <CloseIcon onClick={props.onClose} className="modal-close" />
                    {props.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{props.message}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
