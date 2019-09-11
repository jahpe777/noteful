import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import './noteSideBar.css';

class NoteSideBar extends Component {
  
  render() {
    return (
      <div className="sidebar-container">
        <ul>
          <li>Add Folder</li>
        </ul>
      </div>
    );
  }
}

export default NoteSideBar;