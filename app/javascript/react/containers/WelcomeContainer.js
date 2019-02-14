import React, { Component } from 'react';
import { Link } from 'react-router';
import LobbyIndexContainer from './LobbyIndexContainer'

class WelcomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return(
      <div className="row-limiter">
        <div className="row">
          <div className="small-12 medium-6 columns">
            A
          </div>
          <div className="small-12 medium-6 columns">
            <LobbyIndexContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default WelcomeContainer
