import React, { Component } from 'react';

import Game from './components/Game';

class Game extends Component {

  //Make a 2D Open World? Like 2D player chat. SDSG Lounge World.

  createMap = () => {
    //array of divs that are styled to be tiles
    var map = [<div></div>];

    return map;
  };

  createPlayer = () => {
    //player div styled to be player, styled to a location
    var player = <div></div>;

    return player;
  }
  
  render() {
    return (
      <div>
       <p>Test PR</p>
      </div>
    );
  }
}

export default Game;
