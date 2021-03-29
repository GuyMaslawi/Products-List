import React from 'react';
import { ButtonProps } from '@material-ui/core';
import { ButtonStyle } from './MainButtonStyle';

interface MainButtonProps {
    variant?: "contained" | "outlined";
    color?: "primary" | "secondary";
    label?: string;
    onClick: () => void;
    className?: string;
    asIcon?: boolean;
}
export const MainButton = ({
                                variant = "contained",
                                color = "primary",
                                label,
                                onClick,
                                className,
                                asIcon = false,
                                ...props
                            }: MainButtonProps & ButtonProps) => {

    return (
        <ButtonStyle
            {...props}
            className={className}
            color={color}
            variant={variant}
            asIcon={asIcon}
            onClick={onClick}>
            {label}
        </ButtonStyle>
    );
};

export default MainButton;