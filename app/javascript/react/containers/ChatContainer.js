import React, { Component } from 'react';

class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      messages: [],
      my_user: {},
      my_message: ""
    }
  }

  componentDidMount() {}

  render() {


    return(
      <div className="small-12 columns">
        <div className="panel">

        </div>
      </div>
    )
  }
}

export default ChatContainer
