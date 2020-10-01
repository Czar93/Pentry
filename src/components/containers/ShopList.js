import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledDetailContainer, DetailItem } from './CategoryDetails';
import { StyledListItemContainer } from './CategoriesListItem';
import ListItemButton from '../buttons/ListItemButton';
import ShopListModal from '../modals/ShopListModal';

const StyledDetailItem = styled(DetailItem)`
    display: flex;
    justify-content: space-between;
    padding-right: 30px;
`

const StyledDetailList = styled(StyledListItemContainer)`
    padding: 0 30px 40px 30px;
    background-color: ${({theme}) => theme.color.white};
    min-height: 320px;
    height: auto;
`

const StyledFlexContainer = styled.div`
    width: 150px;
    display: flex;
`

const ShopList = ({data, bought}) => {

    const [shopList, setShopList] = useState([])
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        const newShopList = [];
        data.forEach(category => {
            category.items.forEach(item => {
                let need = item.amount - item.minAmount;
                if(need < 0){
                    newShopList.push(item)
                }
            })
        });
        localStorage.setItem('shoppingList', JSON.stringify(newShopList));
        setShopList(newShopList)
    }, [data]);

    useEffect(() => {
        
    }, [shopList]);

    const toggleModal = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <StyledDetailContainer>
            <StyledDetailList>
                <StyledDetailItem blue>
                    <p>Name</p>
                    <p>Need</p>
                </StyledDetailItem>
                    {shopList.map((item, i) => (
                        <StyledDetailItem item={item} key={i}>
                            <p>{item.name}</p>
                            <StyledFlexContainer>
                                <ListItemButton onClick={()=> {
                                    toggleModal()
                                    bought(item)
                                }} bought/>
                                <p>{item.minAmount - item.amount} {item.type}</p>
                            </StyledFlexContainer>
                        </StyledDetailItem>
                    ))}
            </StyledDetailList>
            {modalOpen && <ShopListModal toggleModal={toggleModal}/>}
        </StyledDetailContainer>
    )
}

export default ShopList;
