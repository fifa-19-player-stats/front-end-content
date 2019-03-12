import React from "react";
import "../Styles/index.css";
import { Route, withRouter } from "react-router-dom";
import SignUp from "../SignUp";
import SignIn from "../SignIn";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/api/register" component={SignUp} />
        <Route path="/api/login" component={SignIn} />
      </div>
    );
  }
}

export default withRouter(App);
