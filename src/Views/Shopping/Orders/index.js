import React, { useReducer, useEffect } from 'react';
import Breadcrumb from 'components/Breadcrumb';
import OrdersTableView from './OrdersTableView';
import { shopping } from 'reducers/initialState';
import {
  fetchCustomers,
  fetchSellers,
  fetchShoppingOrders,
} from 'actions/shopping';
import shoppingReducer from 'reducers/shopping';

const Orders = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shopping);

  useEffect(() => {
    fetchShoppingOrders(dispatch);
    fetchSellers(dispatch);
    fetchCustomers(dispatch);
  }, [dispatch]);

  return (
    <div className='flex flex-col w-full items-start'>
      <Breadcrumb
        parentText='Shopping'
        parentLink='/shopping'
        childText='Order Management'
        childLink='/shopping/orders'
      />
      <div className='flex justify-between w-full'>
        <h2 className='text-xl'>Order Management</h2>
      </div>
      <OrdersTableView
        orders={state.orders}
        loading={state.isLoadingOrders}
        dispatch={dispatch}
        sellers={state.sellers}
        customers={state.customers}
      />
    </div>
  );
};

export default Orders;
