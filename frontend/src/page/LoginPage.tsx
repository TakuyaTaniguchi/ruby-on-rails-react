import React, { useState } from 'react';
// import { UsersComponent } from "./User";
import { useNavigate } from 'react-router-dom';
 
export function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const login = () => {
    fetch('http://localhost:3000/auth/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email: email, 
        password: password,
      }),
    }).then(response => {
      if (response.ok) {
        // レスポンスヘッダーから新しい認証情報を取得して更新
        const headers = response.headers;
        const accessToken = headers.get('access-token');
        if (accessToken) {
          localStorage.setItem('access-token', accessToken);
        }
        const client = headers.get('client');
        if (client) {
          localStorage.setItem('client', client);
        }
        const uid = headers.get('uid');
        if (uid) {
          localStorage.setItem('uid', uid);
        }
        navigate('/memos');
      } else {
        console.log('Login Failed');
      }
    })
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
          </div>
        </div>
      </div>
      <div className='forget-password'>
        <a href='/'>forget Password</a>
      </div>
    </div>
  );
}