import React, { useState } from 'react';
// import TableHeader from "./TableHeader";
import TableBody from './TableBody';
import SellerDetails from './SellerDetails';

const InventoryTableView = () => {
  const [active, setActive] = useState('all');
  const [selectedSeller, setSelectedSeller] = useState(null);
  return (
    <div className='w-full mt-8'>
      <div className='bg-white overflow-x relative rounded-2xl p-10 z-40 md:p-4 md:-mx-6'>
        {/* <TableHeader active={active} setActive={setActive} /> */}
        <TableBody
          setSelectedSeller={setSelectedSeller}
          active={active}
          setActive={setActive}
        />
      </div>
      <SellerDetails
        selectedSeller={selectedSeller}
        setSelectedSeller={setSelectedSeller}
      />
    </div>
  );
};

export default InventoryTableView;
