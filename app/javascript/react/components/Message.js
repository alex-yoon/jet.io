import React from 'react';

const Message = (props) => {
  return(
    <p class="message">
      <strong style={`color:${props.user.color}`}>{props.user.name}:</strong>{props.body}
    </p>
  )
}
