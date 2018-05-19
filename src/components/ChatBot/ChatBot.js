import React, { Component } from 'react'

import Footer from './Footer/Footer';
import MessageList from './MessageList/MessageList';
import Navbar from './Navbar/Navbar';

import { 
  sendMessage,
  getSavedChatMessages,
  saveChatMessages
} from './../../shared/chat';

import './ChatBot.css';

class ChatBot extends Component {

  state = {
    messageList: getSavedChatMessages(),
    sendingMessage: false,
    errorMsg: ''
  }

  onSubmit = value => {
    const { messageList } = this.state;

    this.setState({
      messageList: [
        ...messageList,
        {message: value, sent: true}
      ],
      sendingMessage: true
    });

    sendMessage(value)
      .then(({data: {success, message, errorMessage}}) => {
        if (success) {
          this.setState({
            messageList: [...this.state.messageList, message],
            sendingMessage: false
          });
          // store message in local storage
          saveChatMessages(this.state.messageList);
        } else {
          this.setState({
            errorMsg: errorMessage,
            sendingMessage: false
          });
        }
      })
  }

  render () {
    const { messageList, sendingMessage } = this.state;
    return (
      <div className="chat-bot">
        <Navbar />
        <MessageList 
          messages={this.state.messageList} 
          sendingMessage={sendingMessage} 
        />
        <Footer onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default ChatBot