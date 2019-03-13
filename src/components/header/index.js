import React from 'react';
import styles from 'react'

const headerStyle = {
  height: '60px',
  width: '100%',
  backgroundColor: '#1976d2'
}

class Header extends React.Component {
  render() {
    return (
      <div style={headerStyle} className="headerContainer">
        <form action="" className="login">
          <input type="text" className="email" placeholder='Email'/>
          <input type="text" className="password" placeholder='Password'/>
          <button className="login">Log in</button>
        </form>
      </div>
    )
  }
}

export default Header;
