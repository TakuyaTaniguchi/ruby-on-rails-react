import React, { useState } from 'react';
import apiClient from '../domain/apiClient';
import { useNavigate } from 'react-router-dom';
import { FormTitleH1, FormWrapDiv, FormSectionDiv } from '../css/design';



export function SignUpPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const navigate = useNavigate();

  const singUp = () => {

    apiClient({
      method: 'POST',
      path: 'auth',
      requestAuth: false,
      request: { 
        email: email, 
        password: password, 
        password_confirmation: passwordConfirmation,
        confirm_success_url: 'http://localhost:4000/login'
      },
      extendOption: true,
    }).then(response => {
      if (response.ok) {
        console.log('Sign Up Success');
        navigate('/login');
      } else {
        console.log('Sign Up Failed');
      }
    })


  }

  return (
    <div>
      <div className='sing-up'>
        <FormTitleH1>Sign Up</FormTitleH1>
        <FormWrapDiv>
          <FormSectionDiv>
            <label className='form-label' htmlFor="email">Email</label>
            <input className='form-input' value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" id="email" name="email" />
          </FormSectionDiv>
          <FormSectionDiv>
            <label className='form-label' htmlFor="password">Password</label>
            <input className='form-input' value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" id="password" name="password" />
          </FormSectionDiv>
          <FormSectionDiv>
            <label className='form-label' htmlFor="passwordConfirmation">Password Confirmation</label>
            <input className='form-input' value={passwordConfirmation} onChange={(e)=>{setPasswordConfirmation(e.target.value)}}  type="password" id="passwordConfirmation" name="passwordConfirmation" />
          </FormSectionDiv>
          <FormSectionDiv className='mt-20'>
            <button onClick={singUp} className='form-submit' type="submit">Sign Up</button>
          </FormSectionDiv>
        </FormWrapDiv>
      </div>
    </div>
  );
}