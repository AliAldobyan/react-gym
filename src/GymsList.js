import React, { useState } from "react";
import { connect } from "react-redux";

// Components
import GymCard from "./GymCard";
import SearchBar from "./SearchBar";

const GymList = ({ gyms }) => {
  const [query, setQuery] = useState("");

  const filterGyms = () => {
    return gyms.filter((gym) => {
      return `${gym.name}`.toLowerCase().includes(query.toLowerCase());
    });
  };
  const gymCards = filterGyms().map((gym) => (
    <GymCard key={gym.id} gym={gym} />
  ));

  return (
    <div className="container">
      <h3>Gyms</h3>
      <SearchBar onChange={setQuery} />
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
