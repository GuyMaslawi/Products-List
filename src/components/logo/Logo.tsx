import React from 'react';
import { Img } from './LogoStyle';
import logoIcon from '../../assets/logo/logo.png';

export const Logo = () => {
    return (
        <Img src={logoIcon} alt="website logo" />
    );
};

export default Logo;