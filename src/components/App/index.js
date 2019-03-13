import React from "react";
import "../Styles/index.css";
import { Route, withRouter } from "react-router-dom";
import SignUp from "../Signup";
import SignIn from "../Signin";
import NavBar from "../NavBar";
import axios from "axios";

class App extends React.Component {

  state = {
    username: "",
    password: "",
    loggedIn:false
  };

  handleInputChange = event => {
    this.setState(
      {
         [event.target.name]: event.target.value 
      }
      );
      console.log(event.target.name, event.target.value )
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/register", {username:this.state.username,password:this.state.password})
      .then(response => {
        console.log(response)
        localStorage.setItem("jwt", response.data.token);
        // this.props.history.push("endpoint");
        this.setState({username: "",password: "",loggedIn:true})
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <>
        <NavBar state={this.state.loggedIn}/>
        <SignIn username={this.state.username} password={this.state.password} change={this.handleInputChange} submit={this.handleSubmit}/>
        <div>
          <Route exact path="/" component={SignUp} />
          <Route path="/home" render={props => (<div>Hey</div>)} />
        </div>
      </>
    );
  }
}

export default withRouter(App);
