import React, { Component } from 'react';
import './App.css';
import ChatBot from './components/ChatBot/ChatBot';

class App extends Component {
  render() {
    return (
      <main className="app">
        <ChatBot />
      </main>
    );
  }
}

export default App;
