import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import Players from './components/Players/players';
import axios from 'axios';

//import SignUp from "../Signup";
//import SignIn from "../Signin";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      loading: true
    };
  }
  componentDidMount() {
    axios.get('http://localhost:8000/api/players')
    .then(response => this.setState({players: response.data, loading: false}))
    .catch(err => console.log(err));
  }
  render() {
    let data;
    if (this.state.loading) {
      data = <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt=""/>
    } else {
      data = <div className="App">
                <h1>FIFA 19 PLAYERS</h1>
                <Players data = {this.state.players} />
                </div>
    }
    return (
      <div>
        {data}
      </div>
    );
  }
}
export default App;


{/* <Route path="/api/register" component={SignUp} />
<Route path="/api/login" component={SignIn} /> */}
