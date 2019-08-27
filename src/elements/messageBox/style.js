import styled from 'styled-components';

export const MessageBoxWrapper = styled.span`
    color: ${props => (props.theme.color ? props.theme.color : 'red')};
    font-weight: bold;
    background-color: floralwhite;
    align-items: center;
    display: flex;
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: 1px solid ${props => (props.theme.color ? props.theme.color : 'red')};
    margin: 0 0.5em 0.5em 0;
`;
