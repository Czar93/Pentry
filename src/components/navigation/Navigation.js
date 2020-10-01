import React from 'react';
import NavButton from '../buttons/NavButton';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

const StyledNavigation = styled.div`
    position: relative;
    background-color: ${({theme}) => theme ? theme.color.white : 'white' };
    width: 100%;
    height: 80px;
    position: fixed;
    z-index:2;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: left;
    border-bottom: 1px solid ${({theme}) => theme ? theme.color.bordergray : 'hsla(0, 0%, 60%, 40%)' };
    `
const StyledNavLogo = styled(NavLink)`
    width: 150px;
    height: 60px;
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
`
const StyledNavList = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    `
const Navigation = () => {
    return (
        <StyledNavigation>
            <StyledNavList>
                <StyledNavLogo svg={logo} to="/" />
            </StyledNavList>
            <StyledNavList>
                <NavButton exact to="/">Home</NavButton>
                <NavButton to="/storage">Storage</NavButton>
                <NavButton to="/list">Shopping list</NavButton>
            </StyledNavList>
        </StyledNavigation>
    )
}

export default Navigation;
