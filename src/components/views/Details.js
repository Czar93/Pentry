import React from 'react';
import PageHeader from '../containers/PageHeader';
import CategoryDetails from '../containers/CategoryDetails';
import AppContext from '../../context.js';

const Details = ({match}) => {
    return (
        <AppContext.Consumer>
            {({data}) => {
                let category = data.find(cat => cat.name === match.params.category)
                return (
                <>
                  <PageHeader title={match.params.category} description="My items"/>
                  <CategoryDetails category={category}/>
                </>
                )
            }}
        </AppContext.Consumer>
    )
}

export default Details;
