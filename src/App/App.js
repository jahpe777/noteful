import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import NoteListNav from '../NoteListNav/NoteListNav';
import NotePageNav from '../NotePageNav/NotePageNav';
import NoteListMain from '../NoteListMain/NoteListMain';
import NotePageMain from '../NotePageMain/NotePageMain';
import ApiContext from '../ApiContext';
import config from '../config'
import './App.css';

class App extends Component {
  state = { 
    notes: [], 
    folders: [] 
  };

  //run api calls within componentDidMount
  componentDidMount() {
  //Promise.all will run both fetch methods
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`)
    ])
    //then is for an "accepted" item
      .then(([notesRes, foldersRes]) => {
        //if noteRes call is not successful you'd return the json and run a rejected event
        if (!notesRes.ok)
          return notesRes.json().then(e => Promise.reject(e));
        //if folderRes call is not successful you'd return the json and run a rejected event
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e));
        //if notesRes and folderRes are successful you'd return the json
          return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      //then you'd change state of notes and folder
      .then(([notes, folders]) => {
        this.setState({notes, folders});
      })
      //if changestate is not successful, run an error
      .catch(error => {
        console.error({error});
      });
  }

  handleDeleteNote = noteId => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    });
  };

  renderNavRoutes() {
      return (
        <>
          {['/', '/folder/:folderId'].map(path => (
            <Route 
              exact
              key={path}
              path={path}
              component={NoteListNav}
            />
          ))}   
        <Route path='/note/:noteId' component={NotePageNav} />
        <Route path='/add-folder' component={NotePageNav} />
        <Route path='/add-note' component={NotePageNav} />
    </>
  );
}

renderMainRoutes() {
  return (
    <>
      {['/', '/folder/:folderId'].map(path => (
        <Route
          exact 
          key={path}
          path={path}
          component={NoteListMain}
        />
      ))}
      <Route path='/note/:noteId' component={NotePageMain} />
    </>
  );
}

render() {
  const value = {
    notes: this.state.notes,
    folders: this.state.folders,
    deleteNote: this.handleDeleteNote
  };
  return (
    <ApiContext.Provider value={value}>
      <div className='App'>
        <nav className='App__nav'>{this.renderNavRoutes()}</nav>
        <header className='App__header'>
          <h1>
            <Link to='/'>Noteful</Link>{''}
            <FontAwesomeIcon icon='check-double' />
          </h1>
        </header>
        <main className='App_main'>{this.renderMainRoutes()}</main>
      </div>
    </ApiContext.Provider>
  );
}
}

export default App;
