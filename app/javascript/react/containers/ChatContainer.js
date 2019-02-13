import React, { Component } from 'react';
import ChatInput from "../components/ChatInput"

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
    if (this.state.users.length == 0) {
      return(
        <div className="panel">
          Loading...
        </div>
      )
    }
    else {
      return(
        <div className="panel">
          oof
          <ChatInput

          />
        </div>
      )
    }
  }
}

export default ChatContainer
