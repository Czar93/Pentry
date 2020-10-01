import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import plus from '../../assets/plus.svg';
import AppContext from '../../context.js';
import ListItemButton from '../buttons/ListItemButton'

export const StyledListItemContainer = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 30px;
    background-color: ${({theme}) => theme.color.white};
    overflow: hidden;
    box-shadow: 0 8px 8px rgba(0,0,0,0.11);
    margin-bottom: 30px;
    `
const StyledListItemButton = styled(ListItemButton)`
        position: absolute;
        right: 5px;
        border-radius: 50%;
        width: 40px;
        height: 40px;

        &:hover {
        background-color: hsla(0, 0%, 100%, 40%);
    }
    `

const StyledListItemNameBox = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 0 0 25px;
    background-color: ${({theme}) => theme.color.primary};
    font-weight: ${({theme}) => theme.bold};
    font-size: ${({theme}) => theme.font.xxl};
    position: relative;

    &:hover {
        ${StyledListItemButton} {
            opacity: 1;
        }
    }
`
const StyledAddButton = styled.button`
    font-size: ${({theme}) => theme.font.xl};
    font-weight: ${({theme}) => theme.bold};
    height: 100%;
    width: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-image: url(${plus});
    background-size: 80px;
    background-position: 50% 40%;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`
const StyledList = styled.ul`
    font-size: ${({theme}) => theme.font.l};
    margin: 10px 0 50px 0; 
    padding: 0 20px 0 15px;
    cursor: pointer;
    height: 180px;
    overflow: hidden;
`
const StyledLi = styled.li`
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    height: 55px;
`


const CategoriesListItem = ({item}) => {

    const [redirect, setRedirect] = useState(false);
    
    const handleRedirect = () => {
        setRedirect(!redirect);
    }

    // const params = {
    //     type: 'category',
    //     item
    // }

    if(redirect){
        return <Redirect to={`storage/${item.name}`}/>
    }

    return (
        <AppContext.Consumer>
            {({toggleModal, addCategory, removeCategory}) => (
                
            <StyledListItemContainer >
                {item ? 
                    <>
                        <StyledListItemNameBox>
                            {item.name}
                            <StyledListItemButton remove onClick={()=> toggleModal(removeCategory, {item, modalType: 'Remove' })}/>
                        </StyledListItemNameBox>
                        <StyledList onClick={handleRedirect}>
                            {item.items.map((item, i) => (
                                <StyledLi key={i} >
                                    <p>- {item.name}</p>
                                    <p>{item.amount}/{item.minAmount} {item.type}</p>
                                </StyledLi>
                            ))}
                        </StyledList>
                    </>
                : 
                    <StyledAddButton onClick={()=> toggleModal(addCategory, { modalType: 'Create' })}>
                        Add a category
                    </StyledAddButton>
                }

                </StyledListItemContainer>
                )}
        </AppContext.Consumer>
    )}

export default CategoriesListItem;
