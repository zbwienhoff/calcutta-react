import React, { Component } from 'react';
import './auth.css'
import Button from '../button/button';

class Auth extends Component {
  
  
  render() {
    return (
      <div className='auth-header'>
        <Button btnValue="Sign In" />
      </div>
    );
  }
}

export default Auth;