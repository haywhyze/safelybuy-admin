import React, { useEffect, useContext, useState } from 'react';
import { useTable, useGlobalFilter, useAsyncDebounce } from 'react-table';
import Button from 'components/Button';
import { confirmAlert } from 'react-confirm-alert'; // Import
import { ContextShopping } from 'context';
import TableHeader from './TableHeader';

import { fetchCustomers, suspendUser, terminateUser } from 'actions/shopping';
import { LoadingIcon } from 'svg';

const TableBody = ({ active, setActive, setSelectedSeller }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [{ customersArray, isLoadingCustomers }, dispatch] = useContext(
    ContextShopping
  );

  useEffect(() => {
    fetchCustomers(dispatch);
  }, [dispatch]);

  const handleDelete = React.useCallback(
    (id) => {
      setSelectedId(id);
      confirmAlert({
        title: 'Terminate Customer',
        message: 'Are you sure you want to terminate this customer?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => terminateUser(dispatch, id),
          },
          {
            label: 'No',
            onClick: () => {},
          },
        ],
      });
    },
    [dispatch]
  );

  const handleSuspend = React.useCallback(
    (id) => {
      setSelectedId(id);
      confirmAlert({
        title: 'Suspend Customer',
        message: 'Are you sure you want to suspend this customer?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => suspendUser(dispatch, id),
          },
          {
            label: 'No',
            onClick: () => {},
          },
        ],
      });
    },
    [dispatch]
  );

  const customersData = customersArray
    ?.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .filter((item) => item.status === active || active === 'all')
    .map((user) => ({
      status: 'Active',
      referral: user.referral_code,
      email: user.email,
      seller: user.firstname + ' ' + user.lastname,
      // (
      //   <p
      //     // onClick={() => setSelectedSeller(user)}
      //     className='text-purple-500 cursor-pointer'
      //   >
      //     {user.firstname} {user.lastname}
      //     <br /> <span className='text-gray-800'>({user.phone})</span>
      //   </p>
      // ),
      date: new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        hour12: true,
        minute: 'numeric',
      }).format(Date.parse(user.created_at)),
      actions: (
        <div className='justify-around'>
          {customersArray.length &&
          isLoadingCustomers &&
          selectedId === user.id ? (
            <LoadingIcon />
          ) : (
            <>
              <span onClick={() => handleSuspend(user.id)}>
                <Button rounded secondary>
                  Suspend
                </Button>
              </span>
              <span className='inline-block p-2'></span>
              <span onClick={() => handleDelete(user.id)}>
                <Button rounded danger>
                  Terminate
                </Button>
              </span>
            </>
          )}
        </div>
      ),
    }));

  const data = React.useMemo(() => customersData || [], [customersData]);

  const columns = React.useMemo(
    () => [
      { Header: 'Status', accessor: 'status' },
      { Header: 'Name', accessor: 'seller' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Date Joined', accessor: 'date' },
      // { Header: "Orders", accessor: "orders" },
      { Header: 'Referral Code', accessor: 'referral' },
      { Header: 'Actions', accessor: 'actions' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    // visibleColumns,
    // preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    { columns, data, autoResetGlobalFilter: false },
    useGlobalFilter
  );

  if (isLoadingCustomers && customersArray.length === 0) {
    return (
      <div className='mt-20 mb-20 flex justify-center'>
        <LoadingIcon />
        <span className='text-purple-500 animate-pulse'>
          Loading customers...
        </span>
      </div>
    );
  }

  return (
    <>
      <TableHeader
        active={active}
        setActive={setActive}
        // preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
        useAsyncDebounce={useAsyncDebounce}
      />
      <div className='overflow-x-scroll mt-8'>
        <table {...getTableProps()} className='w-full text-sm'>
          <thead className='text-left border-b-2 border-gray-100'>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className='pb-4 font-normal' {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        style={{ minWidth: '150px' }}
                        className='border-b-2 pr-4 min-w-max border-gray-100 py-4'
                        {...cell.getCellProps()}
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableBody;
