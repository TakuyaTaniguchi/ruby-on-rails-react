import React, {} from 'react';
// import { UsersComponent } from "./User";

export function LoginPage() {

  const login = () => {
    console.log('login');
  }

  return (
    <div>
      <div className='login'>
        <h1 className='form-title'>Login</h1>
        <div className='form-wrap'>
          <div className='form-section'>
            <label className='form-label' htmlFor="email">Email</label>
            <input className='form-input' type="email" id="email" name="email" />
          </div>
          <div className='form-section'>
            <label className='form-label' htmlFor="password">Password</label>
            <input className='form-input' type="password" id="password" name="password" />
          </div>
          <div className='form-section'>
            <button onClick={login} className='form-submit' type="submit">Login</button>
          </div>
        </div>
      </div>
      <div className='forget-password'>
        <a href='/'>forget Password</a>
      </div>
    </div>
  );
}