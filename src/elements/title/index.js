import React from 'react';
import { TitleWrapper } from './style';

const Title = ({ text, theme }) => (
	<TitleWrapper theme={theme}>
		<div>{text}</div>
	</TitleWrapper>
);

export default Title;
