import styled, { css } from 'styled-components';
import searchIcon from '../../assets/search.svg';

const Input = styled.input`
    padding: 15px 30px;
    font-size: ${({theme}) => theme.font.l};
    font-weight: ${({theme}) => theme.light};
    border: none;
    border-radius: 40px;
    margin: 0 0 15px ${({noMargin}) => noMargin ? 0 : '30px'};

    ::placeholder {
        text-transform: lowercase;
        letter-spacing: 1px;
        color: ${({theme}) => theme.color.darkgray};
    }

    &:focus {
        outline: none;
    }

    ${({search}) => 
        search && css`
            padding: 10px 20px 10px 45px;
            background-image: url(${searchIcon});
            background-size: 20px;
            background-position: 15px 50%;
            background-repeat: no-repeat;
        `}
`

export default Input;