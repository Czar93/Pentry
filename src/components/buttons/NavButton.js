import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const StyledButton = styled(NavLink)`
    color: ${({theme}) => theme ? theme.color.darkgray : 'gray'};
    border: none;
    text-decoration: none;
    padding: 10px 5px;
    margin: 0 10px 0 0;
    font-size: ${({theme}) => theme ? theme.font.m : '1.6rem'};
    font-weight: ${({theme}) => theme ? theme.bold : 600};

    &:focus {
        outline: none;
    }

    &.active {
        color: ${({theme}) => theme ? theme.color.primary : 'gray'};
    }
`

const NavButton = ({children, to, exact}) => {
    return (
        <StyledButton 
            as={NavLink} 
            to={to} 
            activeclass="active" 
            exact={exact ? true:false}
            >
          {children}
        </StyledButton>
    )
}

export default NavButton;
