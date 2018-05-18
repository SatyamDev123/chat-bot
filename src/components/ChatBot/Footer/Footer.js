import React, { Component } from 'react'
import PropTypes from "prop-types";
import SendIcon from './../../../icons/send.png';
import './Footer.css';

class Footer extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired }
  state = {value: ''}
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({value:''});
  }
  handleChange = ({target: {value}}) => this.setState({value})
  render () {
    return (
      <div className="footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button type="submit" className="btn">
            <img src={SendIcon} className="icon" />
          </button>
        </form>
      </div>
    )
  }
}

export default Footer;