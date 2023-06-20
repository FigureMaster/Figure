import React from 'react';
import MuiButton from '@mui/material/Button';
import MuiIconButton from '@mui/material/IconButton';
import { orange } from '@mui/material/colors';
import { createTheme, ThemeProvider, IconButtonProps as MuiIconButtonProps, ButtonProps as MuiButtonProps } from '@mui/material';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
    palette: {
        primary: createColor(orange[500]),
        secondary: createColor('#696969')
    },
});

type ButtonProps = Omit<MuiButtonProps, 'label'> 
    & {
        label: string
    };

export const Button = ({ size = 'medium', label, ...props }: ButtonProps) => {
    if(!props.variant) {
        props.variant = 'contained';
    }
    
    if(props.variant === 'contained') {
        props.color = props.color || 'primary';
    } else if(props.variant === 'outlined') {
        props.color = props.color || 'secondary';
    }
    
    return (
        <ThemeProvider theme={theme}>
            <MuiButton size={size} color={props.color} variant={props.variant} {...props}>
                {label}
            </MuiButton>
        </ThemeProvider>
    );
};

type IconButtonProps = Omit<MuiIconButtonProps, 'outlined'> 
    & {
        outlined?: boolean
    };

export const IconButton = ({ outlined = false, ...props }: IconButtonProps) => {
    if(outlined) {
        props.sx = props.sx || { width: '40', height: '40', borderRadius: 1, border: '1px solid', borderColor: 'secondary' }
    }

    return (
        <ThemeProvider theme={theme}>
            <MuiIconButton {...props}>
                {props.children}
            </MuiIconButton>
        </ThemeProvider>
    );
}