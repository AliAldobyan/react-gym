import React from "react";

const GymRow = ({ gymClass }) => {
  return (
    <tr>
      <td>{gymClass.title}</td>
      <td>{gymClass.type} </td>
      <td>{gymClass.date_time}</td>
      <td>{gymClass.isFree}</td>
    </tr>
  );
};

export default GymRow;
