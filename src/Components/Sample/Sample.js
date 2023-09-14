import React from 'react';
import DataTable from '../ReusableComponents/DataTable/DataTable';

const Sample = () => {
    const pagination = { total: 8, current: 1, pageSize: 5 };
    const tableData = [
        { id: "1", name: "vijender", Role: "developer" },
        { id: "2", name: "hari", Role: "developer" },
        { id: "3", name: "sravan", Role: "developer" },
        { id: "4", name: "venky", Role: "developer" },
        { id: "5", name: "vijende1r", Role: "developer" },
        { id: "6", name: "hari1", Role: "developer" },
        { id: "7", name: "sravan1", Role: "developer" },
        { id: "8", name: "venky1", Role: "developer" },

    ]
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: true,
        },
        {
            title: 'Role',
            dataIndex: 'Role',
            sorter: true,
        },

    ];
    const inputData = {
        paginationData: pagination,
        pageSizeOptions: ['10', '20', '30'],
        tableData: tableData,
        columns: columns,
        showChecbox: false,
        showEdit: true,
        showDelete: true,
        showFilter: true,
        showExport: true,
        removeColumsToExport:["id"],
        isServerSidePagination: false,
    }
    return (
        <DataTable inputData={inputData} />
    )
}
export default Sample;