import React, { Component } from 'react';
import './Slide.css';

class Slide extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    const slideInStyle = {
        width: `${this.props.width}`,
        height: '100px',
        backgroundColor: 'white',
        opacity: '0.6',
    }

    return (
        <div>
            <div style={slideInStyle} className={`slide-container ${this.props.timeClass}`}>
            <h2 class="slide-text">{this.props.text}</h2></div>
        </div>
    );
  }
}

export default Slide;
