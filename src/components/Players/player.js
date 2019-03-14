import React from 'react';

const Player = props => {
  return (
    <div className="player">
      <h3><strong>{props.name}</strong></h3>
      <p>Id: {props.id}</p>
      <p>Position: {props.position}</p>
    </div>
  );
};

Player.defaultProps = {
  name: '',
  id: '',
  position: ''
};
//
export default Player;
