import React, { Component } from 'react';
import { Link } from 'react-router';
import LobbyContainer from './LobbyContainer'

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
      <div>
        <div className="row">
          <div className="small-12 medium-6 columns">
            A
          </div>
          <div className="small-12 medium-6 columns">
            <LobbyContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default WelcomeContainer
