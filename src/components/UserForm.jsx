import React, { useRef, useState } from "react";
import { Table } from "./Table";

export const UserForm = () => {
  const [data, setData] = useState({
    name: "Shreevali",
    age: 22,
    address: "Pune",
    department: "IT",
    salary: "1000",
    married: false,
    photo: "",
  });
  const { married } = data;
  const imageRef = useRef();
  const handleChange = (e) => {
    let { value, name, type, checked, files } = e.target;
    const val =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;
    setData({ ...data, [name]: val });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Please enter your details</h1>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Department:</label>
          <select name="department" onChange={handleChange}>
            <option>Choose Department</option>
            <option>Marketting</option>
            <option>Sales</option>
            <option>HR</option>
          </select>
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            placeholder="Enter your salary"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Is Married?</label>
          <input
            type="checkbox"
            name="married"
            checked={married}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Add Profile Photo URL</label>
          <input
            type="file"
            name="photo"
            ref={imageRef}
            onChange={handleChange}
          />
        </div>
        <button onClick={onSubmit}>Submit</button>
      </form>
      <Table data={data} />
    </div>
  );
};
