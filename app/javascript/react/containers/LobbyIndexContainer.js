import React, { Component } from 'react';
import LobbyTile from "../components/LobbyTile"

class LobbyIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lobbies: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/lobbies', {
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then((lobbyList) => {
        this.setState({ lobbies: lobbyList })
      })
      .catch((error) => {
        console.error(`Failed to get list of lobbies: ${error.message}`)
        this.setState({ lobbies: null })
      })
  }

  render() {
    let lobbyTiles;
    if (this.state.lobbies == null) {
      lobbyTiles = (
        <div>
          <p className="error-msg">Could not load lobbies at this time.</p>
        </div>
      )
    }
    else if (this.state.lobbies.length == 0) {
      lobbyTiles = (
        <div>
          <p>Loading...</p>
        </div>
      )
    }
    else {
      lobbyTiles = this.state.lobbies.map((lobby, index) => {
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
    }

    return(
      <div className="panel">
        <h4>Open Lobbies</h4>
        {lobbyTiles}
      </div>
    )
  }
}

export default LobbyIndexContainer
