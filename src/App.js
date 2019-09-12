import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NoteList from './noteList/noteList';
import SideBar from './sideBar/sideBar';
import NotePage from './notePage/notePage';
import NoteSideBar from './noteSideBar/noteSideBar';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Link to='/'>
            <h1>Noteful</h1>
          </Link>
        </header>
        <main className='App-main'>
          <div className='App-sidebar'>
            <Route exact path='/' component={SideBar} />
            <Route path='/folder' component={SideBar} />
            <Route path='/note' component={NoteSideBar} />
          </div>
          <div className='App-content'>
            <Route exact path='/' component={NoteList} />
            <Route path='/folder' component={NoteList} />
            <Route path='/note' component={NotePage} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
