import React, { Component } from 'react'

import Footer from './Footer/Footer';
import MessageList from './MessageList/MessageList';
import Navbar from './Navbar/Navbar';

import ApiRequest from './../../shared/ApiRequest';

import './ChatBot.css';

class ChatBot extends Component {

  state = {
    messageList: [],
    errorMsg: ''
  }

  scrollToBottom() {
    const messageList = document.getElementsByClassName('message-list')[0];
    messageList.scrollTop = messageList.scrollHeight;
  }

  onSubmit = value => {
    const { messageList } = this.state;

    this.setState({
      messageList: [...messageList, {message: value, sent: true}]
    });
    this.scrollToBottom();

    ApiRequest
      .get(`?apiKey=6nt5d1nJHkqbkphe&message=${value}&chatBotID=63906&externalID=chirag1`)
      .then(({data: {success, message, errorMessage}}) => {
        if (success) {
          this.setState({
            messageList: [...this.state.messageList, message]
          });
          this.scrollToBottom();
        } else {
          this.setState({
            errorMsg: errorMessage
          });
        }
      })
      .catch(error => {
        this.setState({
          errorMsg: error
        });
      });
  }

  render () {
    return (
      <div className="chat-bot">
        <Navbar />
        <MessageList messages={this.state.messageList}></MessageList>
        <Footer onSubmit={this.onSubmit}></Footer>
      </div>
    )
  }
}

export default ChatBot