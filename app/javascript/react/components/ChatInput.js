import React from 'react';

const ChatInput = (props) => {
  return(
    <div className="chat-input">
      <form onSubmit={props.onSubmit}>
        <div>
          <strong style={`color:${props.user.color}`}>{props.user.name}</strong>
        </div>
        <input
          name="body"
          onChange={props.onChange}
          type="text"
          value={props.content}
        />
        <input
          className="button"
          type="submit"
          value="Chat"
        />
      </form>
    </div>
  )
}

export default ChatInput
