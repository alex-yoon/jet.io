import React from 'react';

const ChatInput = (props) => {
  return(
    <div className="chat-input">
      <form onSubmit={props.onSubmit}>
        <input
          name={props.name}
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
