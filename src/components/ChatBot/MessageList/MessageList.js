import React, { Component } from 'react'
import Message from '../Message/Message';
import './MessageList.css';
import Loader from './../../Loader/Loader';

class MessageList extends Component {

  // scroll messages to bottom with animation
  scrollToBottom(element, to, duration) {
    if (duration <= 0) return;
    const difference = to - element.scrollTop;
    const perTick = difference / duration * 10;

    setTimeout(() => {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        this.scrollToBottom(element, to, duration - 10);
    }, 10);
  }

  componentDidUpdate() {
    const messageList = document.querySelectorAll('.message-list')[0];
    this.scrollToBottom(messageList, messageList.scrollHeight, 700)
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