import React from 'react';

const Message = (props) => {
  let className;
  if (props.id % 2 == 0) {
    className = "message even"
  }
  else {
    className = "message odd"
  }

  return(
    <p className={className}>
      <strong style={{color: `#${props.author.color}`}}>{props.author.name}:</strong> {props.body}
    </p>
  )
}

export default Message
