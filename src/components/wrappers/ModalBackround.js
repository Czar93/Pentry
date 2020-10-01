import React from 'react';
import styled from 'styled-components';

const StyledModalBackground = styled.div`
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100%;
    top: 0;
    backdrop-filter: blur(3px);
    background-color: hsla(0,0%, 0%, 20%);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalBackground = ({children}) => {
    return (
            <StyledModalBackground>
                {children}
            </StyledModalBackground>
    )
}

export default ModalBackground;
