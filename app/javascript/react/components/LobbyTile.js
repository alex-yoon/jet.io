import React from 'react';
import { Link } from 'react-router';
import LinkButton from "./LinkButton"

const LobbyTile = (props) => {
  return(
    <div>
      <Link to={`/game/${props.lobbyId}`}>
        <div className="lobby-tile">
          <p className="lobby-status">⬗</p>
          <p className="lobby-name">{props.name}</p>
          <p className="lobby-pop">{props.population} player(s)</p>
        </div>
      </Link>
    </div>
  )
}

export default LobbyTile
