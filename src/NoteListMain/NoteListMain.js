import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Note from '../Note/Note';
import CircleButton from '../CircleButton/CircleButton';
import ApiContext from '../ApiContext'
import { getNotesForFolder } from '../notes-helpers'
import PropTypes from 'prop-types';
import './NoteListMain.css';

export default class NoteListMain extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = ApiContext

    render() {
        const { folderId } = this.props.match.params
        const { notes=[] } = this.context
        const notesForFolder = getNotesForFolder(notes, folderId)
        return (
            <section className='NoteListMain'>
                <ul>
                    {notesForFolder.map(note =>
                        <li key={note.id}>
                            <Note
                                id={note.id}
                                name={note.name}
                                modified={note.modified}
                                />
                        </li>
                    )}
                </ul>
                <div className='NoteListMain__button-container'>
                        <CircleButton
                            tag={Link}
                            to='/add-note'
                            type='button'
                            className='NoteListMain__add-note-button'
                            >
                            <i className='fas fa-plus'></i>
                            <br />
                            Note
                            </CircleButton>
                </div>
            </section>
        )
    }
};

NoteListMain.propTypes = {
    match: PropTypes.object.isRequired
}