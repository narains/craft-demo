import React from 'react'
import { MessageBoxWrapper } from './style';

const MessageBox = ({text, theme}) => {
    return (
        <MessageBoxWrapper theme={theme}>
            {text}
        </MessageBoxWrapper>
    )
}

export default MessageBox
