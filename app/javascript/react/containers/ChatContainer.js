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
    this.handleMessageReceipt = this.handleMessageReceipt.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)
  }

  componentDidMount() {
    this.fetchCurrentUser()
    .then((user) => {
      if (user.name == undefined) {
        throw new Error("User is not logged in")
      }
      else {
        this.setState({ my_user: user })
      }
    })
    .then(() => {
      return this.fetchMessageHistory()
    })
    .then((messages) => {
      this.setState({ messages: messages })
    })
    .then(() => {
      this.scrollToBottom()
      this.initiateWebSocket()
    })
    .catch((error) => {
      console.error(`Could not load chat: ${error.message}`)
      if (error.message == "User is not logged in") {
        this.setState({
          error: <p><a href="/users/sign_up">Sign up</a> or <a href="/users/sign_in">log in</a> to access chat</p>
        })
      }
    })
  }

  fetchCurrentUser() {
    return new Promise((resolve, reject) => {
      fetch(`/api/v1/users/current`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => response.json())
      .then((json) => {
        resolve(json['user'])
      })
      .catch((error) => {
        reject(Error(`Failed to retrieve current user data: ${error.message}`))
      })
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
      .then((json) => {
        resolve(json['messages'])
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
          received: this.handleMessageReceipt
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
    this.setState({ my_message: "" })
  }

  handleMessageReceipt(data) {
    let newMessages = this.state.messages
    newMessages.push(data)
    this.setState({ messages: newMessages })
    this.scrollToBottom()
  }

  scrollToBottom(smoothly) {
    if (this.el) {
      this.el.scrollIntoView()
    }
  }

  render() {
    let chatBox
    if (this.state.error) {
      chatBox = this.state.error
    }
    else if (this.state.messages.length == 0) {
      chatBox = "Loading..."
    }
    else {
      let messages = this.state.messages.map((msg, index) => {
        return(
          <Message key={index} id={index} body={msg.body} author={msg.author} />
        )
      })
      chatBox = (
        <div>
          <div className="messages">
            {messages}
            <div ref={el => { this.el = el; }}></div>
          </div>
          <ChatInput
            content={this.state.my_message}
            onChange={this.handleMessageChange}
            onSubmit={this.handleMessageSubmit}
          />
        </div>
      )
    }

    return(
      <div className="panel chat-box">
        <h1>Chat</h1>
        {chatBox}
      </div>
    )
  }
}

export default ChatContainer
