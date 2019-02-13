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

  componentDidMount() {
    console.log("mounting");
    try {
      App.ChatChannel = App.cable.subscriptions.create(
        {
          channel: "ChatChannel",
          lobby_id: this.props.lobby_id
        },
        {
          connected: () => console.log(`Connected to chat at lobby ${this.props.lobby_id}`),
          disconnected: () => console.log("Disconnected from chat"),
          received: (data) => {
            console.log("Incoming data:");
            console.log(data);
          }
        }
      )
    }
    catch (error) {
      console.error(`Failed to connect to chat channel: ${error.message}`)
    }
  }

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
