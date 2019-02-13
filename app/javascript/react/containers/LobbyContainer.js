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
    fetch('/api/v1/lobbies', {
      method: "GET"
    })
      .then((response) => response.json())
      .then((lobbyList) => {
        this.setState({ lobbies: lobbyList })
      })
      .catch((e) => {
        console.error(`Failed to get list of lobbies: ${error.message}`)
        this.setState({ lobbies: null })
      })
  }

  render() {
    let lobbyTiles = this.state.lobbies.map((lobby, index) => {
      return(
        <div key={index}>
          <LobbyTile
            lobbyId={lobby.id}
            name={lobby.name}
            population={lobby.population}
          />
        </div>
      )
    })

    return(
      <div className="panel">
        <h4>Open Lobbies</h4>
        {lobbyTiles}
      </div>
    )
  }
}

export default LobbyContainer
