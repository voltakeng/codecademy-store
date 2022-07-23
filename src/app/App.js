import React from 'react';

import { Cart } from '../features/cart/Cart'; 
import { Inventory } from '../features/inventory/Inventory';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter';
import { SearchTerm } from '../features/searchTerm/SearchTerm';

function getFilteredItems(items, searchTerm) {
  return items.filter(items => items.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

export const App = (props) => {

  const { state, dispatch } = props;

  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <SearchTerm
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />

      <Inventory
        inventory={getFilteredItems(state.inventory,state.searchTerm)}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};
