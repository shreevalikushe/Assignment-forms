import React from "react";
import styles from "./Table.module.css";
export const Table = ({ data }) => {
  return (
    <div>
      <h1>User Info Table</h1>
      <table className={styles.table}>
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>Address</td>
          <td>Department</td>
          <td>Salary</td>
          <td>Married</td>
          <td>Photo</td>
        </tr>
      </table>
      {/* {data.map((item) => (
        <table>
          <tr>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.address}</td>
            <td>{item.address}</td>
            <td>{item.salary}</td>
            <td>{item.married}</td>
            <td>{item.photo}</td>
          </tr>
        </table>
      ))} */}
    </div>
  );
};
