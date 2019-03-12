import React from "react";
import "../Styles/index.css";
import { Route, withRouter } from "react-router-dom";
import SignUp from "../Signup";
import SignIn from "../Signin";

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
