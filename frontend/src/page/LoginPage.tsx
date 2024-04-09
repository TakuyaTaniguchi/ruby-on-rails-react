import React, { useState } from 'react';
import apiClient from '../domain/apiClient';
import { useNavigate } from 'react-router-dom';
// import { gql, useQuery, useMutation } from '@apollo/client';
import { LayoutStyleDiv, FormTitleH1, FormWrapDiv , FormSectionDiv ,FormLabelLabel, FormInputInput} from '../css/design';



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
      <LayoutStyleDiv className='login'>
        <FormTitleH1>Login</FormTitleH1>
        <FormWrapDiv>
          <FormSectionDiv>
            <FormLabelLabel htmlFor="email">Email</FormLabelLabel>
            <FormInputInput value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" id="email" name="email" />
          </FormSectionDiv>
          <FormSectionDiv>
            <label className='form-label' htmlFor="password">Password</label>
            <input className='form-input' value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" id="password" name="password" />
          </FormSectionDiv>
          <FormSectionDiv>
            <button onClick={login} className='form-submit' type="submit">Login</button>
            <button onClick={logout} className='form-submit mt-20'>Logout</button>
          </FormSectionDiv>
        </FormWrapDiv>
      </LayoutStyleDiv>
      <div className='forget-password'>
        <a href='/'>forget Password</a>
      </div>

    </div>
  );
}