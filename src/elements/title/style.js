import styled from 'styled-components';

export const TitleWrapper = styled.div`
	font-size: 1.5rem;
    font-weight: bold;
    color: ${props => (props.theme.color ? props.theme.color : '#1B8728')};
    border: ${props =>
		props.theme.color ? `2px solid ${props.theme.color}` : '2px solid #73E3FF'};
    background-color: ${props => (props.theme.backgroundColor ? props.theme.backgroundColor : 'palevioletred')};
    padding: 0.5em;
`;
