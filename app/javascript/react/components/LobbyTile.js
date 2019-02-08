import React from 'react';
import { Link } from 'react-router';
import LinkButton from "./LinkButton"

const LobbyTile = (props) => {
  return(
    <div className="row">
      <div className="small-9 columns">
        <h3>{props.name}</h3>
        <p>{props.population} player(s)</p>
      </div>
      <div className="small-3 columns">
        <LinkButton
          to={`/game/${props.lobbyId}`}
          classes=""
          text="JOIN"
        />
      </div>
    </div>
  )
}

export default LobbyTile
