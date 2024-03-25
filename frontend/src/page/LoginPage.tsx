import React, { useState } from 'react';
import apiClient from '../domain/apiClient';
import { useNavigate } from 'react-router-dom';
 
export function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const login = () => {


    apiClient({
      method: 'POST',
      path: 'auth/sign_in',
      requestAuth: false,
      request: { email: email, password: password },
      extendOption: true,
    }).then(response => {
      if (response.ok) {
        // レスポンスヘッダーから新しい認証情報を取得して更新
        const headers = response.headers;
        const accessToken = headers.get('access-token');
        const client = headers.get('client');
        const uid = headers.get('uid');
        if (accessToken && client && uid) {
          localStorage.setItem('access-token', accessToken);
          localStorage.setItem('client', client);
          localStorage.setItem('uid', uid);
        }
        navigate('/memos');
      } else {
        console.log('Login Failed');
      }
    })
  }

  const logout = () => {
    localStorage.removeItem('access-token');
    localStorage.removeItem('client');
    localStorage.removeItem('uid');
    navigate('/sign_up');
  }

  return (
    <div>
      <div className='login'>
        <h1 className='form-title'>Login</h1>
        <div className='form-wrap'>
          <div className='form-section'>
            <label className='form-label' htmlFor="email">Email</label>
            <input className='form-input' value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" id="email" name="email" />
          </div>
          <div className='form-section'>
            <label className='form-label' htmlFor="password">Password</label>
            <input className='form-input' value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" id="password" name="password" />
          </div>
          <div className='form-section'>
            <button onClick={login} className='form-submit' type="submit">Login</button>
            <button onClick={logout} className='form-submit mt-20'>Logout</button>
          </div>
        </div>
      </div>
      <div className='forget-password'>
        <a href='/'>forget Password</a>
      </div>

    </div>
  );
}