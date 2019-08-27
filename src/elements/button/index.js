import React from 'react';
import { ButtonWrapper } from './style';

const Button = ({ action, text, theme}) => <ButtonWrapper theme={theme} onClick={action}>{text}</ButtonWrapper>;

export default Button;
