import React, { Component } from 'react';
import LinkButton from '../components/LinkButton'
import { Link } from 'react-router';

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
        <p>Hello from WelcomeContainer</p>
      </div>
    )
  }
}
