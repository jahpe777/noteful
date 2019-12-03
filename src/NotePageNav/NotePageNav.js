import React, { Component } from 'react';
import CircleButton from '../CircleButton/CircleButton';
import ApiContext from '../ApiContext'
import { findNote, findFolder } from '../notes-helpers'
import PropTypes from 'prop-types';
import './NotePageNav.css'

export default class NotePageNav extends Component {
    static defaultProps = {
        history: {
            goBack: () => {}
        },
        match: {
            params: {}
        }
    }
    static contextType = ApiContext;

    render() {
        const { notes, folders } = this.context
        const { noteId } = this.props.match.params
        const note = findNote(notes, noteId) || {}
        const folder = findFolder(folders, note.folderId)
        return (
            <div className='NotePageNav'>
                <CircleButton
                    tag='button'
                    role='link'
                    onClick={() => this.props.history.goBack()}
                    className='NotePageNav__back-button'
                    >
                    <i className='fas fa-chevron-left'></i>
                    <br />
                    Back    
                </CircleButton>
                {folder && (
                    <h3 className='NotePageNav__folder-name'>
                        {folder.name}
                    </h3>
                )}
            </div>
        )
    }
};

NotePageNav.propTypes = {
    match: PropTypes.object.isRequired
}