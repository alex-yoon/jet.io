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
    return(
      <div className="panel">
        
      </div>
    )
  }
}

export default LobbyContainer
