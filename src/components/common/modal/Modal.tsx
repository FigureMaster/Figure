import CloseIcon from '@mui/icons-material/Close';
import { ClickAwayListener, Fade, PopperProps as MuiPopperProps, Paper, Popper } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import './modal.css';

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

const dropdownTheme = createTheme({
    components: {
        MuiMenu: {
            styleOverrides: {
                paper: {
                    // backgroundColor: orange[500],
                }
            }
        }
    }
});

export const Dropdown = ({ open, anchorEl, ...props }: MuiPopperProps) => {
    return (
        <ThemeProvider theme={dropdownTheme}>
            <Popper open={open} anchorEl={anchorEl} placement='bottom' transition disablePortal {...props}>
                {({ TransitionProps, placement }) => (
                    <Fade {...TransitionProps} >
                        <Paper>
                            <ClickAwayListener onClickAway={() => {}}>
                                <>
                                    {props.children}
                                </>
                            </ClickAwayListener>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </ThemeProvider>
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
                    <DialogContentText id="alert-dialog-description">
                        <pre className="alert-text">{props.message}</pre>
                    </DialogContentText>
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
