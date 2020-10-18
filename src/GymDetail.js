import React from "react";
import { connect } from "react-redux";

import GymDetailTable from "./GymDetailTable";

//Route
import { useParams } from "react-router-dom";

const GymDetail = ({ gyms }) => {
  const { gymID } = useParams();

  const gym = gyms.find((gym) => gym.id === +gymID);

  return (
    <div className="container">
      <div>
        <h3>{gym.name}</h3>
        <img
          src={gym.imageUrl}
          className="img-thumbnail img-fluid"
          alt={gym.name}
        />
      </div>
      <GymDetailTable gym={gym} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    gyms: state.gymsState.gyms,
  };
};
export default connect(mapStateToProps)(GymDetail);
