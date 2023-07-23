import React from "react";

import DataTable from "react-data-table-component";

const Orders = () => {
    const columns = [
        {
            name: "Order Id",
            selector: (row) => row.orderId,
        },
        { name: "Status", selector: (row) => row.status },
        { name: "Quantity", selector: (row) => row.quantity },
        { name: "Total", selector: (row) => row.total, sortable: true },
    ];

    const data = [
        {
            id: 1,
            orderId: 1234678545785484,
            status: "shipped",
            quantity: 2,
            total: 5000,
        },
        {
            id: 2,
            orderId: 123421242785484,
            status: "delivered",
            quantity: 2,
            total: 1000,
        },
        {
            id: 3,
            orderId: 1548545544785484,
            status: "cancelled",
            quantity: 2,
            total: 650,
        },
    ];
    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
                selectableRows
                fixedHeader
                pagination
            ></DataTable>
        </div>
    );
};

export default Orders;
