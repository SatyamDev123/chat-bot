import React, { Component } from 'react'
import Message from '../Message/Message';
import './MessageList.css';
import Loader from './../../Loader/Loader';

class MessageList extends Component {
  
  scrollToBottom() {
    const messageList = document.querySelectorAll('.message-list')[0];
    messageList.scrollTop = messageList.scrollHeight;
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const {messages, sendingMessage} = this.props;
    return(
      <div className="message-list">
        {
            messages.map((message, index) =>
            <Message key={index} message={message} />
          )
        }
        {sendingMessage && 
          <div className="message received-message">
            <div className="message-content">
              <Loader />
            </div>
          </div>
        }
      </div>
    )
  }
}

export default MessageList