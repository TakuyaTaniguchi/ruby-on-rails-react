import React, {} from 'react';
// import { UsersComponent } from "./User";

export function SignUpPage() {

  const singUp = () => {
    console.log('SignUp');
  }

  return (
    <div>
      <div className='sing-up'>
        <h1 className='form-title'>Sign Up</h1>
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
            <label className='form-label' htmlFor="passwordConfirmation">Password Confirmation</label>
            <input className='form-input' type="password" id="passwordConfirmation" name="passwordConfirmation" />
          </div>
          <div className='form-section mt-20'>
            <button onClick={singUp} className='form-submit' type="submit">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}