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
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />

        <title>RALISh</title>

        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

        <link href="css/full-width-pics.css" rel="stylesheet" />
      </head>

      <Navbar />
      <br />
      <br />

      <div className="container">
        <div>{getView()}</div>
      </div>
    </div>
  );
}

export default App;
