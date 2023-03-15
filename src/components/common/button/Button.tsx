import React from 'react';
import MuiButton from '@mui/material/Button';
import MuiIconButton from '@mui/material/IconButton';

interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

export const Button = ({ size = 'medium', label, ...props }: ButtonProps) => {
    return (
        <MuiButton variant='contained' {...props}>
            {label}
        </MuiButton>
    );
};

export const IconButton = ({ size = 'medium', label, ...props }: ButtonProps) => {
    return (
        <MuiIconButton>
            {label}
        </MuiIconButton>
    );
}