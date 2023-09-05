import React from 'react'
import { Container } from './ButtonElement'

interface ButtonProps {
    title: string;
    type?: 'submit' | 'button' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
}

const Button = ({ title, type, disabled, onClick }: ButtonProps) => {
    return (
        <Container
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {disabled ? 'Processing...' : title}
        </Container>
    )
}

export default Button