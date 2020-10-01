import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledHeaderButton = styled(NavLink)`
    background: none;
    border: 2px solid ${({theme}) => theme.color.primary};
    padding: 10px 30px;
    font-weight: ${({theme}) => theme.bold};
    color: ${({theme}) => theme.color.white};
    margin: 0 auto;
    transition: all .3s ease-in;
    text-decoration: none;
    text-align: center;

    &:hover {
        background: ${({theme}) => theme.color.primary}
    }
`

const HeaderButton = ({children}) => {
    return (
        <StyledHeaderButton as={NavLink} to="/storage">
            {children}
        </StyledHeaderButton>
    )
}

export default HeaderButton;
