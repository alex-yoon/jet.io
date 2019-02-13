import React from 'react';

const ChatInput = (props) => {
  return(
    <div>
      <form onSubmit={props.onSubmit}>
        <div className="chat-input">
          <input
            name="body"
            onChange={props.onChange}
            type="text"
            value={props.content}
          />
          <input
            className="button"
            id="chat-button"
            type="submit"
            value="Chat"
          />
        </div>
      </form>
    </div>
  )
}

export default ChatInput
