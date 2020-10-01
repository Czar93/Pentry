import styled, { css } from 'styled-components';

const CategoryAddButton = styled.button`
    width: 100px;
    padding: 10px 20px;
    margin: 0 0 10px 0;
    border: none;
    background-color: ${({theme}) => theme.color.primary};
    font-weight: ${({theme}) => theme.bold};
    color: ${({theme}) => theme.color.white};
    cursor: pointer;

    ${({cancel}) => 
        cancel && css`
            background-color: white;
            color: ${({theme}) => theme.color.primary};
            border: 1px solid ${({theme}) => theme.color.primary};
        `
    }
`

export default CategoryAddButton;