import React, { useEffect, useState, useRef } from 'react';
// import { UsersComponent } from "./User";

export function SettingPage() {

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');

  const [isEdiitng, setIsEditing] = useState(false);

  const HTMLNameInput = useRef<HTMLInputElement>(null);

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
        console.log(data);
        setEmail(data.email);
        setName(data.name);
        setNickname(data.nickname);
        setImage(data.image);
      })
      .catch(error => console.error('Error:', error));
  },[])

  // ユーザー情報変更
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const updateUser = () => {
    fetch(`http://localhost:3000/auth/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'access-token': localStorage.getItem('access-token') ||'',
        'client': localStorage.getItem('client')||'',
        'uid': localStorage.getItem('uid')||'',
      },
      body: JSON.stringify({ 
        name: user.name,
        nickname: user.nickname,
        image: user.image,
      }),
    }).then(response => {
      if (response.ok) {
        console.log('Update Success');
      } else {
        console.log('Update Failed');
      }
    })
  }

// https://getavataaars.com/

  return (
    <div className='setting'>
      <div>
        <h1 className='form-title'>Setting</h1>
      </div>
      <div className='form-wrap'>
        <div className='section'>
            <div className='body icon'><img src={image} /></div>
        </div>
        <div className='section'>
            <div className='head'>名前</div>
            { 
              isEdiitng ? ( 
                <div className='body'>
                  <input className='form-input' ref={HTMLNameInput} type="text" onChange={(e)=>{setName(e.target.value)}} value={name}></input>
                </div>
                ) : ( <div className='body'>{name}</div>)
            }
        </div>
        <div className='section'>
          <div className='head'>ニックネーム</div>
          {
            isEdiitng ? (
              <div className='body'>
                <input className='form-input' type="text" onChange={(e)=>{setNickname(e.target.value)}} value={nickname}></input>
              </div>
              ) : ( <div className='body'>{nickname}</div>)
          }
        </div>
        <div className='section'>
          <div className='head'>メールアドレス</div>
          {
            isEdiitng ? (
              <div className='body'>
                <input className='form-input' type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email}></input>
              </div>
              ) : ( <div className='body'>{email}</div>)
          }
        </div>
        <div className='buttin-wrap mt-20'>
          <button className='form-submit harf' onClick={() =>{setIsEditing(!isEdiitng)}}>Edit</button>
          <button className='form-submit harf' onClick={() =>{setIsEditing(!isEdiitng)}}>Update</button>
        </div>
      </div>
    </div>
  );
}