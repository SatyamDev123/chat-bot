import React from 'react'
import Message from '../Message/Message';
import './MessageList.css';

export const MessageList = (props) => {
  return(
    <div className="message-list">
      {
        props.messages.map((message, index) =>
          <Message key={index} message={message}></Message>
        )
      }
    </div>
  )
}

export default MessageList