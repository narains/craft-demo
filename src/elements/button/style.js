import styled from 'styled-components';

export const ButtonWrapper = styled.button`{

         // display:inline-block;
        padding: 0.3em 1.2em;
        margin: 0 0.5em 0.5em 0;
        border-radius: 0.3rem;
        box-sizing: border-box;
        text-decoration: none;
        font-size: ${props => (props.theme.size ? props.theme.size : '1.5rem')};
        font-weight: normal;
        text-align: center;
        transition: all 0.2s;
        // ? '#1B8728' : '#D93829'
        
        color: ${props => (props.theme.color ? props.theme.color : '#1B8728')};
        background-color: '#FFFFFF'
    }

    &:hover{
        color: #FFFFFF;
        background-color: ${props => (props.theme.color ? props.theme.color : '#1B8728')};
    }

    @media all and (max-width:30em) {
        button {
            display:block;
            margin:0.2em auto;
        }
    }
`;