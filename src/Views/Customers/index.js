import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";
import InventoryTableView from "./InventoryTableView";

const Inventory = () => {
  return (
    <div className="flex flex-col w-full items-start">
      <Breadcrumb parentText="Customer Management" parentLink="/customers" />
      <div className="flex justify-between w-full">
        <h2 className="text-xl">Customer Management</h2>
        {/* <span className="inline-block md:hidden">
          <Button
            text="Export to CSV"
            secondary
            roundedFull
            preTagText={
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6004 4.2668H13.1004V4.05969L12.9539 3.91324L12.6004 4.2668ZM9.80039 1.4668L10.1539 1.11324L10.0075 0.966797H9.80039V1.4668ZM6.06706 7.0668V6.5668H5.56706V7.0668H6.06706ZM6.06706 8.93346H5.56706V9.43346H6.06706V8.93346ZM7.93372 8.93346H8.43372V8.43346H7.93372V8.93346ZM7.93372 10.8001V11.3001H8.43372V10.8001H7.93372ZM9.80039 9.8668H9.30039V10.0739L9.44684 10.2203L9.80039 9.8668ZM10.7337 10.8001L10.3802 11.1537L10.7337 11.5072L11.0873 11.1537L10.7337 10.8001ZM11.6671 9.8668L12.0206 10.2203L12.1671 10.0739V9.8668H11.6671ZM2.33372 7.0668V6.5668H1.83372V7.0668H2.33372ZM2.33372 10.8001H1.83372V11.3001H2.33372V10.8001ZM1.90039 5.6668V2.40013H0.900391V5.6668H1.90039ZM12.1004 4.2668V5.6668H13.1004V4.2668H12.1004ZM2.33372 1.9668H9.80039V0.966797H2.33372V1.9668ZM9.44684 1.82035L12.2468 4.62035L12.9539 3.91324L10.1539 1.11324L9.44684 1.82035ZM1.90039 2.40013C1.90039 2.16081 2.0944 1.9668 2.33372 1.9668V0.966797C1.54212 0.966797 0.900391 1.60852 0.900391 2.40013H1.90039ZM0.900391 12.2001V13.6001H1.90039V12.2001H0.900391ZM2.33372 15.0335H11.6671V14.0335H2.33372V15.0335ZM13.1004 13.6001V12.2001H12.1004V13.6001H13.1004ZM11.6671 15.0335C12.4587 15.0335 13.1004 14.3917 13.1004 13.6001H12.1004C12.1004 13.8395 11.9064 14.0335 11.6671 14.0335V15.0335ZM0.900391 13.6001C0.900391 14.3917 1.54212 15.0335 2.33372 15.0335V14.0335C2.0944 14.0335 1.90039 13.8395 1.90039 13.6001H0.900391ZM8.40039 6.5668H6.06706V7.5668H8.40039V6.5668ZM5.56706 7.0668V8.93346H6.56706V7.0668H5.56706ZM6.06706 9.43346H7.93372V8.43346H6.06706V9.43346ZM7.43372 8.93346V10.8001H8.43372V8.93346H7.43372ZM7.93372 10.3001H5.60039V11.3001H7.93372V10.3001ZM9.30039 6.60013V9.8668H10.3004V6.60013H9.30039ZM9.44684 10.2203L10.3802 11.1537L11.0873 10.4466L10.1539 9.51324L9.44684 10.2203ZM11.0873 11.1537L12.0206 10.2203L11.3135 9.51324L10.3802 10.4466L11.0873 11.1537ZM12.1671 9.8668V6.60013H11.1671V9.8668H12.1671ZM4.66706 6.5668H2.33372V7.5668H4.66706V6.5668ZM1.83372 7.0668V10.8001H2.83372V7.0668H1.83372ZM2.33372 11.3001H4.66706V10.3001H2.33372V11.3001Z"
                  fill="white"
                />
              </svg>
            }
          />
        </span> */}
        <span className="hidden bg-purple-600 px-3 rounded-full py-3 md:inline-block">
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6004 4.2668H13.1004V4.05969L12.9539 3.91324L12.6004 4.2668ZM9.80039 1.4668L10.1539 1.11324L10.0075 0.966797H9.80039V1.4668ZM6.06706 7.0668V6.5668H5.56706V7.0668H6.06706ZM6.06706 8.93346H5.56706V9.43346H6.06706V8.93346ZM7.93372 8.93346H8.43372V8.43346H7.93372V8.93346ZM7.93372 10.8001V11.3001H8.43372V10.8001H7.93372ZM9.80039 9.8668H9.30039V10.0739L9.44684 10.2203L9.80039 9.8668ZM10.7337 10.8001L10.3802 11.1537L10.7337 11.5072L11.0873 11.1537L10.7337 10.8001ZM11.6671 9.8668L12.0206 10.2203L12.1671 10.0739V9.8668H11.6671ZM2.33372 7.0668V6.5668H1.83372V7.0668H2.33372ZM2.33372 10.8001H1.83372V11.3001H2.33372V10.8001ZM1.90039 5.6668V2.40013H0.900391V5.6668H1.90039ZM12.1004 4.2668V5.6668H13.1004V4.2668H12.1004ZM2.33372 1.9668H9.80039V0.966797H2.33372V1.9668ZM9.44684 1.82035L12.2468 4.62035L12.9539 3.91324L10.1539 1.11324L9.44684 1.82035ZM1.90039 2.40013C1.90039 2.16081 2.0944 1.9668 2.33372 1.9668V0.966797C1.54212 0.966797 0.900391 1.60852 0.900391 2.40013H1.90039ZM0.900391 12.2001V13.6001H1.90039V12.2001H0.900391ZM2.33372 15.0335H11.6671V14.0335H2.33372V15.0335ZM13.1004 13.6001V12.2001H12.1004V13.6001H13.1004ZM11.6671 15.0335C12.4587 15.0335 13.1004 14.3917 13.1004 13.6001H12.1004C12.1004 13.8395 11.9064 14.0335 11.6671 14.0335V15.0335ZM0.900391 13.6001C0.900391 14.3917 1.54212 15.0335 2.33372 15.0335V14.0335C2.0944 14.0335 1.90039 13.8395 1.90039 13.6001H0.900391ZM8.40039 6.5668H6.06706V7.5668H8.40039V6.5668ZM5.56706 7.0668V8.93346H6.56706V7.0668H5.56706ZM6.06706 9.43346H7.93372V8.43346H6.06706V9.43346ZM7.43372 8.93346V10.8001H8.43372V8.93346H7.43372ZM7.93372 10.3001H5.60039V11.3001H7.93372V10.3001ZM9.30039 6.60013V9.8668H10.3004V6.60013H9.30039ZM9.44684 10.2203L10.3802 11.1537L11.0873 10.4466L10.1539 9.51324L9.44684 10.2203ZM11.0873 11.1537L12.0206 10.2203L11.3135 9.51324L10.3802 10.4466L11.0873 11.1537ZM12.1671 9.8668V6.60013H11.1671V9.8668H12.1671ZM4.66706 6.5668H2.33372V7.5668H4.66706V6.5668ZM1.83372 7.0668V10.8001H2.83372V7.0668H1.83372ZM2.33372 11.3001H4.66706V10.3001H2.33372V11.3001Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
      <InventoryTableView />
    </div>
  );
};

export default Inventory;
