import React, { Component } from 'react';
import ChatContainer from "./ChatContainer"

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return(
      <div className="row">
        <div className="small-3 columns">
          <div className="panel">
            oof
          </div>
        </div>
        <div className="small-9 columns">
          <div className="panel">
            Hi this is game number {this.props.params.id}
          </div>
        </div>
      </div>
    )
  }
}

export default GameContainer
