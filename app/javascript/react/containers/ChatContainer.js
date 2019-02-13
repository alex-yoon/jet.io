import React, { Component } from 'react';
import Message from "../components/Message"
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
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/lobbies/${this.props.lobby_id}/chat`, {
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then((backlog) => {
        console.log(backlog)
        this.setState({ messages: backlog })
      })
      .catch((error) => {
        console.error(`Failed to get message history: ${error.message}`)
      })

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

  handleMessageChange(event) {
    this.setState({ my_message: event.target.value })
  }

  handleMessageSubmit(event) {
    event.preventDefault()
    console.log(this.state.my_message);
  }

  render() {
    if (this.state.messages.length == 0) {
      return(
        <div className="panel">
          Loading...
        </div>
      )
    }
    else {
      let messages = this.state.messages.map((msg, index) => {
        return(
          <div key={index}>
            <Message
              body={msg.body}
              author={msg.author}
            />
          </div>
        )
      })

      return(
        <div className="panel">
          <div className="messages">
            {messages}
          </div>
          <ChatInput
            user={this.state.my_user}
            content={this.state.my_message}
            onChange={this.handleMessageChange}
            onSubmit={this.handleMessageSubmit}
          />
        </div>
      )
    }
  }
}

export default ChatContainer
