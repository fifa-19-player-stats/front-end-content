import React from "react";
import "../Styles/index.css";
//import GenericForm from "../GenericForm";

const SignIn = (props) => {
    return (
        <form onSubmit={props.submit}>
          <input
            type="text"
            name="username"
            placeholder="Username..."
            value={props.username}
            onChange={props.change}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password..."
            value={props.password}
            onChange={props.change}
            required
          />
        <button type="submit">Submit</button>
      </form>
    );
}

export default SignIn;
