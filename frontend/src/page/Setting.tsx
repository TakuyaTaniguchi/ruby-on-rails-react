import React, { useEffect, useState, useRef } from 'react';
import apiClient from '../domain/apiClient';
// import { UsersComponent } from "./User";

export function SettingPage() {

  const [name, setName] = useState('初期値');
  const [nickname, setNickname] = useState('初期値');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');

  const [isEdiitng, setIsEditing] = useState(false);

  const HTMLNameInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
   apiClient({
      method: 'GET',
      path: 'users/show',
      requestAuth: true,
      request: {},
   }).then((response) => {
      setEmail(response.email || '');
      setName(response.name || '');
      setNickname(response.nickname || '');
      setImage(response.image || '');
   }).catch((error) => {
      console.error('Error:', error);
   })
  },[])

  // ユーザー情報変更
  const updateUser = () => {

    apiClient({
      method: 'PUT',
      path: 'auth',
      requestAuth: true,
      request: { 
        name: name,
        nickname: nickname,
        image: image,
      },
    }).then(response => {
      if (response) {
        console.log('Update Success');
      } else {
        console.log('Update Failed');
      }
    })


    // fetch(`http://localhost:3000/auth/`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'access-token': localStorage.getItem('access-token') ||'',
    //     'client': localStorage.getItem('client')||'',
    //     'uid': localStorage.getItem('uid')||'',
    //   },
    //   body: JSON.stringify({ 
    //     name: name,
    //     nickname: nickname,
    //     image: image,
    //   }),
    // }).then(response => {
    //   if (response.ok) {
    //     console.log('Update Success');
    //   } else {
    //     console.log('Update Failed');
    //   }
    // })
  }

// https://getavataaars.com/

  return (
    <div className='setting'>
      <div>
        <h1 className='form-title'>Setting</h1>
      </div>
      <div className='form-wrap'>
        <div className='section'>
          { image ? (
            <div className='body icon'><img src={image} /></div>
          ) : (  <input className='form-input' type="text" onChange={(e)=>{setImage(e.target.value)}} value={image}></input>
          )}
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
           <div className='body'>{email}</div>
        </div>
        <div className='buttin-wrap mt-20'>
          <button className='form-submit harf' onClick={() =>{setIsEditing(!isEdiitng)}}>Edit</button>
          <button className='form-submit harf' onClick={() =>{
            setIsEditing(!isEdiitng)
            updateUser()
            }}>Update</button>
        </div>
      </div>
    </div>
  );
}