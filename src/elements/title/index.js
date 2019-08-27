import React from 'react';
import { TitleWrapper } from './style';

const Title = ({ text, primary }) => (
    <TitleWrapper primary>
        <div>{text}</div>
    </TitleWrapper>
)

export default Title;
