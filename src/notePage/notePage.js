import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './notePage.css';
// import DUMMY from './dummyStore/dummyStore'

class NotePage extends Component {
  
  render() {
    return (
      <div className="Note">
        <header>
          <button className='go-back-button'>
            Go Back
          </button>
          {/* <h3>{note.name}</h3> */}
          <button className='delete-button'>
            Delete
          </button>
        </header>
      </div>
    );
  }
}

export default NotePage;
