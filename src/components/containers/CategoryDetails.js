import React, { useState, useEffect, useContext } from 'react';
import Input from '../inputs/Input';
import styled, { css } from 'styled-components';
import AppContext from '../../context.js';
import { StyledListItemContainer } from './CategoriesListItem';
import ListItemButton from '../buttons/ListItemButton';
import CategoryAddButton from '../buttons/CategoryAddButton';

export const StyledDetailContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    padding: 0 30px;
`

export const StyledDetailList = styled(StyledListItemContainer)`
    padding: 0 30px;
    background-color: ${({theme}) => theme.color.white};
    min-height: 320px;
`

export const DetailItem = styled.div`
    border-bottom: 1px solid ${({theme}) => theme.color.bordergray};
    display: grid;
    grid-template-columns: 1fr 260px;
    width: 100%;
    padding: 0 15px;
    
    &:hover {
        ${ListItemButton} {
            opacity: 1;
        }
    }

    ${({blue}) => (
        blue && css`
            color: ${({theme}) => theme.color.primary};
            border-color: ${({theme}) => theme.color.primary};
            font-weight: ${({theme}) => theme.bold};
        `
    )}

    :first-child {
        margin-bottom: 10px;
    }
`
export const StyledGridItem = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 70px) 120px;
    text-align: center;
`

const StyledFunctionalBox = styled.div`
    display: flex;
    flex-direction: column;
    width: min-content;
    padding-left: 30px;
    align-items: flex-start;
`

const CategoryDetails = ({category}) => {

    const context = useContext(AppContext);
    const [filteringValue, setFilteringValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(() => {

    if(category){
        const dataFromStorage = localStorage.getItem('myData');
        const parsedData = JSON.parse(dataFromStorage);
        const array = parsedData ? parsedData : context.data;
        let index = array.findIndex(obj => obj.name === category.name);
        let categoryData = array[index].items;
        let newData = [];
        newData = categoryData.filter(elem => elem.name.toLowerCase().indexOf(filteringValue) !== -1);  

        setFilteredData(newData)
        }
    }, [filteringValue, context.data, category]);

    const handleFilterValue = (event) => {
        setFilteringValue(event.target.value.toLowerCase())
    }

    return (
        <AppContext.Consumer>
            {({toggleModal, addItem, editItem, removeItem }) => (
                <>
                <StyledFunctionalBox>
                    <Input 
                        noMargin 
                        search 
                        placeholder="filter"
                        value={filteringValue} 
                        onChange={handleFilterValue}
                    />
                    <CategoryAddButton adder onClick={()=> toggleModal(addItem, { category, modalType: 'Add' })}>Add item</CategoryAddButton>
                </StyledFunctionalBox>
                <StyledDetailContainer>
                    <StyledDetailList>
                        <DetailItem blue>
                            <p>Name</p>
                            <StyledGridItem>
                                <p>Delete</p>
                                <p>Edit</p>
                                <p>Current / Need</p>
                            </StyledGridItem>
                        </DetailItem>
                        {filteredData.map((item, i) => (
                            <DetailItem item={item} key={i}>
                               <p>{item.name}</p>
                                <StyledGridItem>
                                   <ListItemButton onClick={()=> toggleModal(removeItem, {item, category, modalType: 'Remove'})} remove />
                                   <ListItemButton onClick={()=> toggleModal(editItem, {item, category, modalType: 'Edit'})} edit />
                                   <p>{item.amount}/{item.minAmount} {item.type}</p>
                                </StyledGridItem>
                            </DetailItem>
                        ))}
                    </StyledDetailList>
                </StyledDetailContainer>
            </>
            )}
        </AppContext.Consumer>
    )
}

CategoryDetails.propTypes = {

};

export default CategoryDetails;

