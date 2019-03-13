import React from "react";

const NavBar = props => {
  const LogOut = <button>LogOut</button>
  const LogIn = <button>LogIn</button>
  return (
      
    <div>
        {
            (props.state ? LogOut : LogIn)
        }
    </div>
  );
};

export default NavBar;