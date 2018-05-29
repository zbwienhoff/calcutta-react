import React, {Component} from 'react';
import './loginForm.css';

class LoginForm extends Component {
  render() {
    return (
      <div className='login-form'>
        <form>
          <div className='form-group'>
            <label><strong>Email Address</strong></label>
            <input type='email' className='form-control' id='emailInput' placeholder='Enter email' />
          </div>
          <div className='form-group'>
            <label><strong>Password</strong></label>
            <input type='password' className='form-control' id='passwordInput' placeholder='Password' />
          </div>
          <button type='submit' className='btn btn-primary'>Log In</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;