import React from 'react';

import { Cart } from '../features/cart/cartComponent'; 
import { Inventory } from '../features/inventory/inventoryComponent';
import { CurrencyFilter } from '../features/currencyFilter/currencyFilterComponent';
import { SearchTerm } from '../features/searchTerm/searchTermComponent';

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
