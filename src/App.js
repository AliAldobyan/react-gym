import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Navbar from "./Navbar";
import GymsList from "./GymsList";
import GymDetail from "./GymDetail";
import Signup from "./SignupForm";
import Login from "./LoginForm";

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
        <Route path="/signup/">
          <Signup />
        </Route>
        <Route path="/login/">
          <Login />
        </Route>
      </Switch>
    );
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <div>{getView()}</div>
      </div>
    </div>
  );
}

export default App;
