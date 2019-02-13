import React, { Component } from 'react';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return(
      <div className="panel small-12 columns">
        Hi this is game number {this.props.params.id}
      </div>
    )
  }
}

export default GameContainer
