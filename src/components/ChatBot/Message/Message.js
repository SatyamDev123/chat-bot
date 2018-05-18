import React from 'react';
import './Message.css';
import ClassNames from 'classnames';

export const Message = (props) => {
  const { message, sent } = props.message;
  return(
    <div className={ClassNames("message", sent ? 'sent-message' : 'received-message')}>
      <div className="message-content">
        <span>{message}</span>
      </div>
    </div>
  )
}

export default Message;