import { useState } from "react";

export default function EmployeeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    email: "",
    designation: "",
    address: "",
    pinCode: "",
    joiningDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full p-6 shadow-lg rounded-2xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(formData).map((key) => (
            <div key={key} className="flex flex-col">
              <label htmlFor={key} className="text-gray-700 font-medium capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </label>
              <input
                type={key.includes("date") ? "date" : "text"}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="border p-2 rounded-lg"
              />
            </div>
          ))}
          <div className="md:col-span-2">
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
