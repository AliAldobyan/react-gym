import React from "react";
import { connect } from "react-redux";

// Components
import GymCard from "./GymCard";

const GymList = ({ gyms }) => {
  const gymCards = gyms.map((gym) => <GymCard key={gym.id} gym={gym} />);

  return (
    <div className="container">
      <h3>Gyms</h3>
      <div className="row">{gymCards}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    gyms: state.gymsState.gyms,
  };
};

export default connect(mapStateToProps)(GymList);
