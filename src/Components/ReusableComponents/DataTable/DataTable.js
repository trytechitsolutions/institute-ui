import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Row, Col } from 'antd';
import { CSVLink } from 'react-csv';
import { EditOutlined, DeleteOutlined, SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import './DataTable.css';

const DataTable = (props) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [pagination, setPagination] = useState();
    const [loading, setLoading] = useState(true);
    const [filterText, setFilterText] = useState('');
    const [sortedInfo, setSortedInfo] = useState('');
    const { paginationData, pageSizeOptions, tableData, columns, showChecbox, showEdit, showDelete,
        showFilter, showExport, isServerSidePagination, removeColumsToExport } = props.inputData;

    const [filteredData, setFilteredData] = useState(tableData);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])

    const handleTableChange = (pagination, filters, sorter) => {
        if (isServerSidePagination) {
            console.log(sorter)
        }
        else {
            setSortedInfo(sorter)
            setPagination(pagination);
            clientSideSorSort(sorter);
        }

    };

    const handleEdit = (record) => {
        console.log(record)
    };

    const handleDelete = (record) => {
        console.log(record)
    };

    const generateActions = (record) => {
        const actions = [];
        if (showEdit) {
            actions.push(<Button
                type=""
                key={record.id}
                icon={<EditOutlined />}
                onClick={() => handleEdit(record)}
            />);
        }
        if (showDelete) {
            actions.push(
                <Button
                    type="danger"
                    key={"d" + record.id}
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(record)}
                />
            );
        }
        return actions;
    }


    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedKeys, selectedRows) => {
            setSelectedRowKeys(selectedKeys);
        },
    };
    
    const csvData = filteredData.map(obj => {
        return Object.fromEntries(
            Object.entries(obj).filter(([key]) => !removeColumsToExport.includes(key))
        );
    });




    const handleFilter = (val) => {
        setFilterText(val);
        const filteredData = tableData.filter((item) =>
            Object.values(item).some((value) =>
                String(value).toLowerCase().includes(val.toLowerCase())
            )
        );
        setFilteredData(filteredData);
    };

    const clientSideSorSort = (column) => {
        const { field, order } = column;
        const sortedData = [...filteredData].sort((a, b) => {
            if (order === 'ascend') {
                return a[field] > b[field] ? 1 : -1;
            } else {
                return a[field] < b[field] ? 1 : -1;
            }
        });
        setFilteredData(sortedData);
    }

    useEffect(() => {
        if (showEdit || showDelete) {
            columns.push({
                title: 'Actions',
                dataIndex: 'actions',
                render: (text, record) => generateActions(record),
            })
        }
    })
    useEffect(() => {
        console.log("hi", paginationData);
        setFilteredData(tableData);
        setPagination(paginationData);
    }, [tableData])

    return (
        <div>
            <br />
            <Row justify="end" style={{ marginRight: "10px", marginBottom: "10px" }}>
                {showFilter && <Col xs={24} sm={12} md={8} lg={6} xl={3}>
                    <Input
                        placeholder="Search"
                        value={filterText}
                        onChange={e => handleFilter(e.target.value)}
                        prefix={<SearchOutlined />}
                    />
                </Col>
                }
                &nbsp;
                {showExport && <Col xs={24} sm={12} md={8} lg={6} xl={2}>
                    <Button type="primary" icon={<DownloadOutlined />} >
                        <CSVLink data={csvData} filename={'table_data.csv'}>
                            Export to CSV
                        </CSVLink>
                    </Button>
                </Col>
                }
            </Row>
            <Table
                rowSelection={showChecbox && rowSelection}
                columns={columns}
                pagination={{
                    ...pagination,
                    showSizeChanger: true,
                    pageSizeOptions: pageSizeOptions,
                    showTotal: (total, range) =>
                        `Total ${total} records (${range[0]}-${range[1]} of ${total})`,
                }}
                loading={loading}
                dataSource={filteredData.length === 0 ? [] : filteredData.map(item => ({ ...item, key: item.id }))}
                onChange={handleTableChange}
                sortOrder={sortedInfo.order}
            />
        </div>
    );
};
export default DataTable;
