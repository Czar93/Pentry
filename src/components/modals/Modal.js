import React, { useState, useEffect } from 'react';
import ModalBackground from '../wrappers/ModalBackround';
import styled from 'styled-components';
import ModalInput from '../inputs/ModalInput';
import Paragraph from '../text/Paragraph';
import Select from '../inputs/Select';
import CategoryAddButton from '../buttons/CategoryAddButton';
import AppContext from '../../context';

const StyledModalContainer = styled.div`
    width: 40%;
    min-width: 300px;
    padding: 45px 15px 30px 15px;
    height: 60%;
    min-height: 450px;
    background-color: ${({theme}) => theme.color.white};
    border-radius: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
`

const StyledAddItemContainer = styled.div`
    width: 80%;
    max-width: 350px;
    display: grid;
    grid-template-columns: 1fr min-content;
    grid-gap: 10px;
    `

const Modal = ({modalParams = null}) => {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [minAmount, setMinAmount] = useState('')
    const [type, setType] = useState('')
    
    const params = {
        name,
        amount,
        minAmount,
        type,
    }
    useEffect(() => {
        if(modalParams && modalParams.item){
            setName(modalParams.item.name)
            setAmount(modalParams.item.amount)
            setMinAmount(modalParams.item.minAmount)
            setType(modalParams.item.type)
        }
    }, [modalParams]);
    
    const handleNameInput = (e) => {
        setName(e.target.value)
    }

    const handleAmountInput = (e) => {
        setAmount(e.target.value)
    }

    const handleMinAmountInput = (e) => {
        setMinAmount(e.target.value)
    }

    const handleAmountOption = (event) => {
        setType(event.target.value)
    }

    const { modalType } = modalParams;

    return (
        <AppContext.Consumer>
            {({closeModal, modalFunction}) => (
                <ModalBackground>
                <StyledModalContainer>
                    <Paragraph black big>{modalType} element</Paragraph>
                        {modalType !== 'Remove' ? 
                                <>
                                  <ModalInput 
                                    placeholder="Enter name" 
                                    value={name} 
                                    onChange={handleNameInput}
                                    /> 
                                    {modalType !== 'Create' &&
                                        <StyledAddItemContainer>
                                          <ModalInput 
                                            amount 
                                            type="number"
                                            onChange={handleAmountInput} 
                                            value={amount} 
                                            placeholder="Enter amount" 
                                            maxLength="5"
                                            />
                                          <Select onChange={handleAmountOption} value={type}>
                                            <option value="szt." >szt.</option>
                                            <option value="op." >op.</option>
                                            <option value="l" >l</option>
                                            <option value="ml" >ml</option>
                                            <option value="kg" >kg</option>
                                            <option value="g" >g</option>
                                          </Select>
                                          <ModalInput amount type="number" onChange={handleMinAmountInput} value={minAmount} placeholder="Min amount" maxLength="5"/>
                                        </StyledAddItemContainer>
                                    }
                                </>
                           :
                           <>
                             <Paragraph big black>{name}</Paragraph>
                             <Paragraph medium black>Selected element will be deleted</Paragraph>
                           </>
                        }
                           
                        <StyledAddItemContainer>
                           
                        </StyledAddItemContainer>
                            <Paragraph medium>Are you sure?</Paragraph>
                          <StyledAddItemContainer>
                            <CategoryAddButton 
                                onClick={()=> modalFunction(params)}>
                                    Accept
                            </CategoryAddButton>
                            <CategoryAddButton 
                                cancel
                                onClick={()=> closeModal()}>
                                Cancel
                            </CategoryAddButton>
                          </StyledAddItemContainer>
                        {/* <Paragraph medium black>{item}</Paragraph> */}
                </StyledModalContainer>
            </ModalBackground>
            )}
        </AppContext.Consumer>
    )
}

export default Modal;
