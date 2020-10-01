import React from 'react';
import PageHeader from '../containers/PageHeader';
import ShopList from '../containers/ShopList';
import AppContext from '../../context.js';

const ShoppingList = () => {
    return (
        <AppContext.Consumer>
            {({data, boughtItem}) => (
                <>
                    <PageHeader title="Shopping list" description="What do I exactly need?"/>  
                    <ShopList data={data} bought={boughtItem}/>
                </>
            )}
        </AppContext.Consumer>
    )
}

export default ShoppingList;

