import React from 'react';
import { MessageBoxWrapper } from './style';

const MessageBox = ({ text, theme }) => (
	<MessageBoxWrapper theme={theme}>
		{text}
	</MessageBoxWrapper>
);

export default MessageBox;
