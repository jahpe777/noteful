import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ApiContext from '../ApiContext';
import PropTypes from 'prop-types';
import './Note.css'

export default class Note extends Component {
    static defaultProps = {
        onDeleteNote: () => {},
    }
    static contextType = ApiContext;

    handleClickDelete = e => {
        e.preventDefault()
        const noteId = this.props.id
        this.context.deleteNote(noteId)
        .then( (deletedNote) => {
            this.props.onDeleteNote(deletedNote)
        })
    }

    render() {
        const { name, id, modified } = this.props
        return (
            <div className='Note'>
                <h2 className='Note__title'>
                    <Link to={`/note/${id}`}>
                        {name}
                    </Link>
                </h2>
                <button 
                    className='Note__delete' 
                    type='button'
                    onClick={this.handleClickDelete}
                >
                    <FontAwesomeIcon icon='trash-alt' />
                    {''}
                    remove
                </button>
                <div className='Note__dates'>
                    <div className='Note__dates-modified'>Modified {''}
                        <span className='Date'>
                        {format(new Date(modified), 'do MMM yyyy')}
                        </span>
                    </div>
                </div>
            </div>
            )
        }
    };

    Note.propTypes = {
        id: PropTypes.string.isRequired
    }

   