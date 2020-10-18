import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Navbar from "./Navbar";
import GymsList from "./GymsList";
import GymDetail from "./GymDetail";

function App() {
  const getView = () => {
    // if (props.loading) {
    //   return <Loading />;
    // } else {
    return (
      <Switch>
        <Redirect exact from="/" to="/gyms" />
        <Route path="/gyms/:gymID">
          <GymDetail />
        </Route>
        <Route path="/gyms/">
          <GymsList />
        </Route>
      </Switch>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="content col-6">{getView()}</div>
      </div>
    </div>
  );
}

export default App;
