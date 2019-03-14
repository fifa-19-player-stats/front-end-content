import React, { Component } from 'react';
import Player from './player';

class Players extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="players">
        {this.props.data.map(player => {
          return (
            <Player
              name={player.name}
              id={player.id}
              position={player.position}
              key={player.id}
            />
          );
        })}




      </div>
    );
  }
}

// Player.defaultProps = {
//  players: [],
// };

export default Players;
