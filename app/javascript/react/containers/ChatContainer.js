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
      my_message: "",
      error: null
    }
    this.fetchCurrentUser = this.fetchCurrentUser.bind(this)
    this.fetchMessageHistory = this.fetchMessageHistory.bind(this)
    this.initiateWebSocket = this.initiateWebSocket.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this)
  }

  componentDidMount() {
    this.fetchMessageHistory()
    .then((messages) => {
      this.setState({messages: messages})
    })
    .catch((error) => {
      console.error(error.message)
    })
  }

  fetchCurrentUser() {
    fetch(`/api/v1/users/current`, {
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => response.json())
    .then((user) => {
      this.setState({ my_user: user })
    })
    .catch((error) => {
      console.error(`Failed to retrieve current user data: ${error.message}`)
    })
  }

  fetchMessageHistory() {
    return new Promise((resolve, reject) => {
      fetch(`/api/v1/lobbies/${this.props.lobby_id}/chat`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        else if (response.status == 403) {
          throw new Error("User is not logged in")
        }
      })
      .then((messages) => {
        resolve(messages)
      })
      .catch((error) => {
        if (error.message == "User is not logged in") {
          this.setState({
            error: <p><a href="/users/sign_up">Sign up</a> or <a href="/users/sign_in">log in</a> to access chat</p>
          })
        }
        reject(Error(`Failed to get message history: ${error.message}`))
      })
    })
  }

  initiateWebSocket() {
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
    let payload = {
      message: {
        body: this.state.my_message
      }
    }
    App.ChatChannel.send(payload)
  }

  render() {
    if (this.state.error != null) {
      return(
        <div className="panel">
          {this.state.error}
        </div>
      )
    }
    else if (this.state.messages.length == 0) {
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
