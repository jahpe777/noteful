import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import './Note.css';

class NotePage extends Component {
  
  render() {
    return (
      <div className="Note">
        <header>
          <button className='go-back-button'>
            Go Back
          </button>
          <button className='delete-button'>
            Delete
          </button>
        </header>
      </div>
    );
  }
}

export default NotePage;
