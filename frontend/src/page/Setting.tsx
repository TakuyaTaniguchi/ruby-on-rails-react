import React, { useEffect } from 'react';
// import { UsersComponent } from "./User";

export function SettingPage() {

  const nickname = 'nickname';
  const mailAddress = 'mailAddress';
  const icon = 'icon';

  useEffect(() => {
    fetch('http://localhost:3000/users/me',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'access-token': localStorage.getItem('access-token') ||'',
        'client': localStorage.getItem('client')||'',
        'uid': localStorage.getItem('uid')||'',
      },
    })
      .then(response => response.json()) // レスポンスをJSONに変換
      .then(data => {
        console.log(data); // データをセット
      })
      .catch(error => console.error('Error:', error));
  })


  return (
    <div className='setting'>
      <div>
        <h1>Setting</h1>
      </div>
      <div className='form-wrap'>
        <div className='section'>
          <div className='head'>表示名</div>
          <div className='body'>{nickname}</div>
        </div>
        <div className='section'>
          <div className='head'>アイコン</div>
          <div className='body'>{icon}</div>
        </div>
        <div className='section'>
          <div className='head'>メールアドレス</div>
          <div className='body'>{mailAddress}</div>
        </div>
      </div>
    </div>
  );
}