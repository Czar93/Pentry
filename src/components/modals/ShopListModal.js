import React from 'react';
import styled from 'styled-components';
import Paragraph from '../text/Paragraph';
import CategoryAddButton from '../buttons/CategoryAddButton';

const StyledModalContainer = styled.div`
    border-radius: 30px;
    background-color: ${({theme}) => theme.color.white};
    width: 300px;
    height: 200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    position: fixed;
    z-index: 9999;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    box-shadow: 0 16px 16px rgba(0,0,0,0.3);
`

const ShopListModal = ({toggleModal}) => {
    return (
          <StyledModalContainer>
             <Paragraph medium black>Stocks have been replenished</Paragraph>
             <CategoryAddButton onClick={toggleModal}>Okay</CategoryAddButton>
          </StyledModalContainer>
    )
}

export default ShopListModal;
