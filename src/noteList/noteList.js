import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './noteList.css';
// import DUMMY from './dummyStore/dummyStore'

class NoteList extends Component {

  // const notes = props.
  
  render() {
    return (
      <div>
        <ul className='note-list'>
          NoteList
        </ul>
        <button className='add-note-button'>
          Add note
        </button>
      </div>
    );
  }
}

export default NoteList;
