import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';

import Button from './button/button';
import Auth from './auth/auth';
import Modal from './modal/modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='auth-header col-sm-2'>
            <Auth />
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to March Madness Calcutta</h1>
        </header>
        <div className='login-modal'>
          <Modal show='' onHide='' modalType='login' />
        </div>
        <p className="App-intro">
          To get started, create or join a league
        </p>
        <div className='league-options'>
          <Button btnValue="Join" />
          <Button btnValue="Create" />
        </div>
      </div>
    );
  }
}

export default App;
