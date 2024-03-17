import React, { useState } from 'react';
import { UsersComponent } from "./User";

export function MyPageComponent() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserID] = useState(0);

  // ユーザーを登録
  const addUser = () => {

    // userIdが0の場合は新規登録
    if(userId === 0){
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email , password: password}),
      })
    } else {
      // userIdが0でない場合は更新
      fetch(`http://localhost:3000/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email , password: password}),
      })
    }

  };

  const deleteUser = () => {
    fetch(`http://localhost:3000/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }


  return (
    <div>
      <h1>My Page </h1>
      <p>ユーザー情報</p>
      <UsersComponent />

      <div>
        <h3>ユーザーフォーム</h3>
        <div>
        <div>
            <label>id</label>
            <input type="number" name="id" value={userId} onChange={(e)=>{setUserID(Number(e.target.value))}}/>
          </div>
          <div>
            <label>名前</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
            <label>メールアドレス</label>
            <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div>
            <label>パスワード</label>
            <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          <button type="submit" onClick={addUser}>登録</button>
          <button type="submit" onClick={deleteUser}>削除</button>
          </div>
      </div>
    </div>
  );
}