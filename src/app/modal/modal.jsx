import React, { Component } from 'react';
import './modal.css';

import LoginForm from '../loginForm/loginForm';

class Modal extends Component {
  render() {
    if (this.props.modalType === 'login') {
      return (
        <div className='modal'>
          <div className='modal-header'>
            <h4>Please Login</h4>
          </div>
          <LoginForm />
        </div>
      );
    }
  }
}

export default Modal;