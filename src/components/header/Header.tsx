import React from 'react';
import { Logo } from '..';
import { Wrapper, Title } from './HeaderStyle';

interface HeaderProps {
    title?: string;
}

export const Header = ({ title }: HeaderProps) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Logo />
        </Wrapper>
    );
};

export default Header;