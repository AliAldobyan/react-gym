import React from "react";

import GymRow from "./GymRow";

const GymDetailTable = ({ gym }) => {
  const gymClasses = gym.classes.map((gymClass) => (
    <GymRow key={gym.title} gymClass={gymClass} />
  ));
  return (
    <table className="mt-3 table table-dark mt-5">
      <thead>
        <tr>
          <th>Title</th>
          <th>Type</th>
          <th>Date / Time</th>
          <th>is Free?</th>
        </tr>
      </thead>
      <tbody>{gymClasses}</tbody>
    </table>
  );
};

export default GymDetailTable;
