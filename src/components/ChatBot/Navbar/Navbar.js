import React from 'react'
import BotIcon from './../../../icons/bot.png';
import './Navbar.css';

export const Navbar = (props) => {
  return(
    <header className="nav-bar">
      <img src={BotIcon} className="icon" />
      <span className="nav-title">Bot</span>
    </header>
  )
}

export default Navbar;