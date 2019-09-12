import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './sideBar.css';
import DUMMY from '../dummyStore/dummyStore'

class SideBar extends Component {

  render() {
    return (
      <div className="sidebar-container">
        <ul>
            {DUMMY.folders.map(folder => 
              <Link to = {`/folder/${folder.id}`}>
                <li key={folder.id}>
                  {folder.name}
                </li>
              </Link>
               )}
            <li>Add Folder</li>
        </ul>
      </div>
    );
  }
}

export default SideBar;