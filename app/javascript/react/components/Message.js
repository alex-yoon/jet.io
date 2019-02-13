import React from 'react';

const Message = (props) => {
  return(
    <p class="message">
      <strong style={`color:${props.author.color}`}>{props.author.name}:</strong>{props.body}
    </p>
  )
}

export default Message
