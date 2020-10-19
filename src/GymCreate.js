import React, { useState } from "react";
import { addGym } from "./redux/actions";
import { connect } from "react-redux";

const GymCreate = (props) => {
  const [gymData, setGymData] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) =>
    setGymData({ ...gymData, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addGym(gymData);
  };

  const { name, image } = gymData;

  return (
    <div className="col-6 mx-auto">
      <div className="card my-5">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                name="name"
                placeholder="Name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="img">Image URL</label>
              <input
                type="text"
                className="form-control"
                id="image"
                value={image}
                name="image"
                placeholder="Image URL"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Create GYM
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addGym: (gymData) => dispatch(addGym(gymData)),
});

export default connect(null, mapDispatchToProps)(GymCreate);
