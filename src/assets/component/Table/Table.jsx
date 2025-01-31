import React, { useState } from 'react';
import { data } from './Data';
import DataTable from 'react-data-table-component';

// Define Columns
const columns = [
    {
        name: "Name",
        selector: row => row.name,
        sortable: true,
        cell: row => <span className="font-semibold">{row.name}</span>
    },
    {
        name: "Designation",
        selector: row => row.designation,
        sortable: true,
        cell: row => <span className="text-blue-600">{row.designation}</span>
    },
    {
        name: "Year",
        selector: row => row.Year,
        sortable: true,
        cell: row => <span className="text-gray-700">{row.Year}</span>
    },
    {
        name: "Action",
        selector: row => row.action,
        cell: row => (
            <div className="space-x-2">
                <button className="px-4 py-1 bg-gray-500 text-white rounded-lg hover:bg-gray-600">Read</button>
                <button className="px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600">Edit</button>
                <button className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">Delete</button>
            </div>
        )
    }
];

// Custom Table Styles
const customStyles = {
    headCells: {
        style: {
            backgroundColor: '#1F2937',  // Dark Gray Header
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            textTransform: 'uppercase'
        }
    },
    cells: {
        style: {
            padding: '12px',
            borderBottom: '1px solid #E5E7EB' // Light gray border
        }
    }
};

function Table() {
    const [searchText, setSearchText] = useState("");
    
    // Filter Data Based on Search Query
    const filteredData = data.filter(row =>
        row.name.toLowerCase().includes(searchText.toLowerCase()) ||
        row.designation.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="p-6 bg-white shadow-md rounded-lg w-4/5 mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Employee Details</h1>

            {/* Search Input */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by Name or Designation..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>

            {/* Data Table */}
            <DataTable
                columns={columns}
                data={filteredData}
                customStyles={customStyles}
                pagination
                highlightOnHover
                striped
            />
        </div>
    );
}

export default Table;
