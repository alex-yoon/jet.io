import React from 'react';
import { Link } from 'react-router';
import LinkButton from "./LinkButton"

const LobbyTile = (props) => {
  return(
    <div className="lobby-tile">
      <div className="row">
        <div className="small-2 columns">
          <div className="lobby-status">⬗</div>
        </div>
        <div className="small-6 columns">
          <h5 className="lobby-name">{props.name}</h5>
          {props.population} player(s)
        </div>
        <div className="small-4 columns">
          <LinkButton
            to={`/game/${props.lobbyId}`}
            classes="join-lobby-button"
            text="JOIN"
          />
        </div>
      </div>
    </div>
  )
}

export default LobbyTile
