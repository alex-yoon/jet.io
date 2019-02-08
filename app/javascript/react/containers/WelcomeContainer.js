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
          <div className="small-4 columns">
            <LobbyContainer />
          </div>
          <div className="small-4 columns">
            B
          </div>
          <div className="small-4 columns">
            C
          </div>
        </div>
      </div>
    )
  }
}

export default WelcomeContainer
