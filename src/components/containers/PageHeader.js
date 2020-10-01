import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    font-size: ${({theme}) => theme.font.xxxl};
    font-weight: ${({theme}) => theme.bold};
    margin: 20px 0 5px 0;

    ::first-letter {
        text-transform: uppercase;
    } 
`

const StyledDescription = styled.p`
    font-size: ${({theme}) => theme.font.m};
    color: ${({theme}) => theme.color.primary};
    margin: 5px 0;
`

const StyledPageHeader = styled.div`
    width: 100%;
    height: 120px;
    padding: 10px 35px;
`

const PageHeader = ({title, description}) => {
    return (
        <StyledPageHeader>
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription>{description}</StyledDescription>
        </StyledPageHeader>
    )
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
};

export default PageHeader;

