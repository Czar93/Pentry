import styled, { css } from 'styled-components';
import removeIcon from '../../assets/cancel.svg';
import editIcon from '../../assets/pen.svg';
import boughtIcon from '../../assets/buy.svg';

const ListItemButton = styled.button`
    width: 50px;
    height: 50px;
    margin: auto;
    padding: 0;
    background-color: transparent;
    border: none;
    background-position: 50%;
    background-size: 35%;
    background-image: url(${({edit}) => edit ? editIcon : removeIcon });
    background-repeat: no-repeat;
    opacity: 0;
    cursor: pointer;

    ${({bought}) =>
        bought && css`
            background-image: url(${boughtIcon});
            background-size: 50%;
        `
}

`
export default ListItemButton;