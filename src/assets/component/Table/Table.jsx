import React, { useState } from "react";
import DataTable from "react-data-table-component";

// Sample Data (Initially Populated)
const initialData = [
    { id: 1, name: "John Doe", designation: "Software Engineer", Year: 2022 },
    { id: 2, name: "Jane Smith", designation: "Product Manager", Year: 2021 },
    { id: 3, name: "Alice Johnson", designation: "UI/UX Designer", Year: 2023 },
];

// Define Columns
const columns = (handleEdit, handleDelete) => [
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
        cell: row => (
            <div className="space-x-2 flex flex-col gap-1 md:flex-row">
                <button 
                    className="px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    onClick={() => handleEdit(row)}
                >
                    Edit
                </button>
                <button 
                    className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    onClick={() => handleDelete(row.id)}
                >
                    Delete
                </button>
            </div>
        )
    }
];

// Custom Table Styles
const customStyles = {
    headCells: {
        style: {
            backgroundColor: '#1F2937',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            textTransform: 'uppercase'
        }
    },
    cells: {
        style: {
            padding: '12px',
            borderBottom: '1px solid #E5E7EB'
        }
    }
};

function Table() {
    const [data, setData] = useState(initialData);
    const [searchText, setSearchText] = useState("");
    const [formData, setFormData] = useState({ id: null, name: "", designation: "", Year: "" });
    const [showForm, setShowForm] = useState(false);

    // 🔍 Filter Data Based on Search Query
    const filteredData = data.filter(row =>
        row.name.toLowerCase().includes(searchText.toLowerCase()) ||
        row.designation.toLowerCase().includes(searchText.toLowerCase())
    );

    // 🟢 CREATE: Add New Employee
    const handleAdd = () => {
        if (formData.name && formData.designation && formData.Year) {
            if (formData.id === null) {
                // Add new record
                setData([...data, { ...formData, id: data.length + 1 }]);
            } else {
                // Update existing record
                setData(data.map(item => item.id === formData.id ? formData : item));
            }
            setFormData({ id: null, name: "", designation: "", Year: "" });
            setShowForm(false);
        }
    };

    // 🟠 UPDATE: Load Selected Data into Form
    const handleEdit = (row) => {
        setFormData(row);
        setShowForm(true);
    };

    // 🔴 DELETE: Remove Employee
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    return (
        <div className=" bg-white shadow-md rounded-lg  max-h-screen   mt-10 p-2  ">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Employee Details</h1>

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search by Name or Designation..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />

            {/* Add Employee Button */}
            {!showForm && (
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 hover:bg-blue-600"
                    onClick={() => setShowForm(true)}
                >
                    Add Employee
                </button>
            )}

            {/* Add/Edit Form (Visible Only When showForm is True) */}
            {showForm && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4 border-2 border-black">
                    <h2 className="text-xl font-semibold mb-3">
                        {formData.id === null ? "Add New Employee" : "Edit Employee"}
                    </h2>
                    <div className="grid grid-cols-3 gap-2">
                        <input
                            type="text"
                            placeholder="Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="border p-2 rounded"
                        />
                        <input
                            type="text"
                            placeholder="Designation"
                            value={formData.designation}
                            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                            className="border p-2 rounded"
                        />
                        <input
                            type="number"
                            placeholder="Year"
                            value={formData.Year}
                            onChange={(e) => setFormData({ ...formData, Year: e.target.value })}
                            className="border p-2 rounded"
                        />
                    </div>
                    <div className="flex space-x-2 mt-3 border-2  border-black">
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            onClick={handleAdd}
                        >
                            {formData.id === null ? "Add Employee" : "Update Employee"}
                        </button>
                        <button
                            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                            onClick={() => setShowForm(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Data Table */}
            <DataTable
                columns={columns(handleEdit, handleDelete)}
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
