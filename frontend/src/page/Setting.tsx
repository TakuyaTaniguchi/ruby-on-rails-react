import React, { useEffect, useState } from 'react';
// import { UsersComponent } from "./User";

export function SettingPage() {

  const [user, setUser] = useState({
    id: 0,
    email: '',
    provider: '',
    uid: '',
    allow_password_change: false,
    name: '',
    nickname: '',
    image: '',
    created_at: '',
    updated_at: '',
    memos: [],
  });

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
        setUser(data);
      })
      .catch(error => console.error('Error:', error));
  })

  // 変更
  // authPUT


  return (
    <div className='setting'>
      <div>
        <h1 className='form-title'>Setting</h1>
      </div>
      <div className='form-wrap'>
      <div className='section'>
          <div className='head'>名前</div>
          <div className='body'>{user.name}</div>
        </div>
        <div className='section'>
          <div className='head'>表示名</div>
          <div className='body'>{user.nickname}</div>
        </div>
        <div className='section'>
          <div className='head'>アイコン</div>
          <div className='body'>{user.image}</div>
        </div>
        <div className='section'>
          <div className='head'>メールアドレス</div>
          <div className='body'>{user.email}</div>
        </div>
      </div>
    </div>
  );
}