import React, { Component } from 'react';
import LobbyTile from "../components/LobbyTile"

class LobbyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lobbies: []
    }
  }

  componentDidMount() {
    
  }

  render() {
    let lobbyTiles = this.state.lobbies.map((lobby, index) => {
      <div key={index}>
        <LobbyTile
          lobbyId={lobby.id}
          name={lobby.name}
          population={lobby.population}
        />
      </div>
    })

    return(
      <div className="panel">
        <h1>Open Lobbies</h1>
        {lobbyTiles}
      </div>
    )
  }
}

export default LobbyContainer
