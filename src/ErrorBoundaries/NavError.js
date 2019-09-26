import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavError extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>Could not display the nav bar.</h2>
      )
    }
    return this.props.children
  }
};

export default NavError;

NavError.propTypes = {
  children: PropTypes.array.isRequired
}