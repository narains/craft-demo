import styled from 'styled-components';


export const TitleWrapper = styled.div`
	font-size: 1.5rem;
    font-weight: bold;
    color: ${props => (props.primary ? '#45687F' : 'palevioletred')};
    border: ${props =>
    props.primary ? '2px solid #DFEAF3' : '2px solid #73E3FF'};
    background-color: ${props => (props.primary ? '#DCEDF5' : 'palevioletred')};
    padding: 0.5em;
`;