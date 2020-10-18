import React from "react";
import { Link } from "react-router-dom";

const GymCard = ({ gym }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mt-5">
      <Link to={`/gyms/${gym.id}`} className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={gym.imageUrl}
            //alt={gym.name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{gym.name}</span>
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default GymCard;
