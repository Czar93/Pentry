import styled, { css } from 'styled-components';

const Input = styled.input`
    padding: 15px 30px;
    font-size: ${({theme}) => theme.font.l};
    font-weight: ${({theme}) => theme.light};
    border: none;
    border-radius: 40px;
    width: 80%;
    max-width: 350px;
    height: min-content;
    text-align: center;
    box-shadow: 0 8px 8px rgba(0,0,0,0.3);
    margin: 0;

    ::placeholder {
        letter-spacing: 1px;
        color: ${({theme}) => theme.color.darkgray};
    }

    &:focus {
        outline: none;
    }

    ${({amount}) => 
        amount && css`
            height: 35px;
            padding: 5px 15px 5px 20px;
            margin: 0;
            width: 100%;
            font-size: ${({theme}) => theme.font.m};
        `}

`

export default Input;