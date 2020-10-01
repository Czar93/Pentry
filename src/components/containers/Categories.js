import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../inputs/Input';
import CategoriesListItem from './CategoriesListItem';

const StyledGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    width: 100%;
    padding: 0 30px;
`

const Categories = ({data}) => {

    const [filteringValue, setFilteringValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(() => {

        let newData = data.filter(elem => elem.name.toLowerCase().indexOf(filteringValue) !== -1)
        setFilteredData(newData)

    }, [filteringValue, data]);

    const handleFilterValue = (event) => {
        setFilteringValue(event.target.value.toLowerCase())
    }

    return (
            <>
                <Input 
                    search 
                    placeholder="filter"
                    value={filteringValue} 
                    onChange={handleFilterValue}
                    />
                <StyledGridContainer>
                    {filteredData.map((category, i) => (
                        <CategoriesListItem key={i} item={category}/>
                    ))}
                    <CategoriesListItem add/>
                </StyledGridContainer>
            </>
            )
    }

export default Categories;

